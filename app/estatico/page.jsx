export const dynamic = "force-static";

const EstaticoPage = () => {
  return (
    <div>
      <h1>Hola esta mi empresa</h1>

      <p>{new Date().toISOString()}</p>
    </div>
  );
};

export default EstaticoPage;
