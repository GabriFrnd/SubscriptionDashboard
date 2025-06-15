import { addDoc, updateDoc, deleteDoc, getDoc, getDocs, collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConnection';

/**
 * Cria uma nova assinatura para um usuário.
 * @param {string} uid - ID do usuário
 * @param {object} dados - { nome, valor, categoria, dataRenovacao }
 */
export async function criaAssinatura(uid, dados) {
  if (!dados.nome || !dados.categoria || !dados.valor || !dados.dataRenovacao) {
    throw new Error('Todos os campos são obrigatórios.');
  }
  return await addDoc(collection(db, uid), {
    nome: dados.nome,
    valor: Number(dados.valor),
    categoria: dados.categoria,
    dataRenovacao: dados.dataRenovacao,
  });
}

export async function atualizarAssinatura(uid, assinaturaId, dados) {
  const ref = doc(db, uid, assinaturaId);
  return await updateDoc(ref, {
    nome: dados.nome,
    valor: Number(dados.valor),
    categoria: dados.categoria,
    dataRenovacao: dados.dataRenovacao,
  });
}

export async function deletarAssinatura(uid, assinaturaId) {
  const ref = doc(db, uid, assinaturaId);
  return await deleteDoc(ref);
}

export async function buscarAssinatura(uid, assinaturaId) {
  const ref = doc(db, uid, assinaturaId);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const dados = snap.data();
    return {
      ...dados,
      dataRenovacao: dados.dataRenovacao.toDate(),
    };
  }
  return null;
}

export function observarAssinaturas(uid, callback) {
  return onSnapshot(collection(db, uid), (snapshot) => {
    const lista = snapshot.docs.map((doc) => {
      const dados = doc.data();
      return {
        id: doc.id,
        nome: dados.nome,
        valor: dados.valor,
        categoria: dados.categoria,
        dataRenovacao: dados.dataRenovacao.toDate(),
      };
    });
    callback(lista);
  });
}

export const buscarTodasAssinaturas = async (uid) => {
  const snapshot = await getDocs(collection(db, uid));
  const lista = [];

  snapshot.forEach((docSnap) => {
    const dados = docSnap.data();
    lista.push({
      id: docSnap.id,
      nome: dados.nome,
      valor: dados.valor,
      categoria: dados.categoria,
      dataRenovacao: dados.dataRenovacao.toDate(),
    });
  });

  return lista;
};

export function filtrarProximasRenovacoes(assinaturas) {
  const hoje = new Date();
  const daqui30Dias = new Date();
  daqui30Dias.setDate(hoje.getDate() + 30);

  const assinaturasNoPeriodo = assinaturas.filter(
    (a) => a.dataRenovacao >= hoje && a.dataRenovacao <= daqui30Dias
  );

  const renovacoesUnicas = {};

  assinaturasNoPeriodo.forEach((assinatura) => {
    const nome = assinatura.nome.toLowerCase();

    if (!renovacoesUnicas[nome] || assinatura.dataRenovacao < renovacoesUnicas[nome].dataRenovacao){
        renovacoesUnicas[nome] = assinatura;
    }
  });
  
  return Object.values(renovacoesUnicas);
}

export function calcularResumoPorAssinatura(assinaturas) {
  const totais = {};

  assinaturas.forEach((a) => {
    const nome = a.nome.toLowerCase();
    if (!totais[nome]) {
      totais[nome] = {
        nome: a.nome,
        valorTotal: 0,
      };
    }
    totais[nome].valorTotal += Number(a.valor);
  });

  return Object.values(totais);
}
