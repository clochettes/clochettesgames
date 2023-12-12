import Link from "next/link";

export default function Headerweb() {
  return (
    <ul className="max-sm:flex-col flex flex-row justify-around my-2 ">
      <li className=" flex inline flex-row text-lg my-0.2 ">
        <a>ClochettesGames.fr</a>
      </li>
      <div className="max-sm:space-x-4 flex inline flex-row text-xl space-x-10">
        <a>Accueil</a>
        <a>Nos Jeux</a>
        <a>Social</a>
        <a>Crédit</a>
      </div>
    </ul>
  );
}