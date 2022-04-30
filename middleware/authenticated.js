export default async function ({ redirect, $axios }) {
  return $axios.get(`/api/me`)
  .then(response => {
    console.log(response.status)
  })
  .catch(() => {
    return redirect('/sign-in');
  })
}