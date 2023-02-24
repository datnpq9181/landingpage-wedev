<<<<<<< HEAD
<script>
  // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
</script>
=======
import React from "react";
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function Darkmode() {
  return <div>Darkmode</div>;
}

export default Darkmode;
>>>>>>> d9c4c9f15d6beef25edb5dd3853f708c9cb804a7
