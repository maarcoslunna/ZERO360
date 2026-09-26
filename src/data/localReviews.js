// Valoraciones enviadas desde este mismo navegador (no hay backend/base de datos
// compartida: esto NO sincroniza entre visitantes, solo evita que la reseña de
// quien la escribió "desaparezca" hasta que el equipo la revise y la añada
// de forma permanente en plans.js).
const KEY = 'zero360_reviews_v1'
export function getLocalReviews() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}
export function addLocalReview(review) {
  try {
    const list = getLocalReviews()
    list.unshift(review)
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 20)))
  } catch { /* localStorage no disponible: seguimos sin romper el envío */ }
}
