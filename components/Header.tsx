import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 min-w-7xl px-8 md:px-24 lg:px-32">
      <div className="text-primary text-3xl font-bold">GangOf4</div>

      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="#"
              className="text-white uppercase hover:underline hover:decoration-primary decoration-2 underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white uppercase hover:underline hover:decoration-primary decoration-2 underline-offset-4"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white uppercase hover:underline hover:decoration-primary decoration-2 underline-offset-4"
            >
              Services
            </Link>
          </li>
          <li>
            <Button
              variant="secondary"
              className="bg-primary text-white hover:bg-primary/80 uppercase rounded-xl py-1"
            >
              Contact
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
