import useFetch from './useFetch';

function ListeArticles() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Chargement en cours...</p>
;
  if (error) return <p>Erreur : {error.message}</p>
;

  return (
    <ul>
      {data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListeArticles;