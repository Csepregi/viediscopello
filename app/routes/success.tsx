export default function Success() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-center">
          <div className="w-44 h-44 text-green-500 mx-auto mb-4">
            {/* Replace this div with your icon */}
            <div className="icon-placeholder">
            <img src="./eventphoto.jpeg" alt="TastaVino Logo" className="mb-2" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-blue mb-2">Pagamento Avvenuto con Successo</h2>
          <p className="text-blue mb-4">Grazie per il tuo acquisto! La tua transazione è stata completata con successo.</p>
          <a href="/" className="inline-block px-6 py-2 mt-4 text-sm font-medium leading-6 text-center text-blue bg-white hover:bg-blue hover:text-white  rounded-full shadow transition duration-200 ease-in-out">
            Vai alla pagina principale
          </a>
        </div>
      </div>
    );
  }