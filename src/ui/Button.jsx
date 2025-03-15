import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-amber-300 focus:ring focus:ring-amber-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-300";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-500 uppercase transition-colors hover:bg-stone-300 focus:ring focus:ring-stone-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-300 px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
