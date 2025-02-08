import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header></Header>
      <main className="flex flex-1 items-center justify-center">
        <div className="text-6xl">EVERYTHING ABOUT ART</div>
      </main>
      <footer></footer>
    </div>
  );
}
