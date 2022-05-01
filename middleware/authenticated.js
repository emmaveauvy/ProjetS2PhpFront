export default async function ({ redirect, $axios }) {
  return $axios.get(`/api/me`)
  .then(response => {
    //oui
  })
  .catch(() => {
    return redirect('/sign-in');
  })
}