Hooks.once("init", () => {
  if (!game.modules.get("babele")?.active || !game.babele) {
    return;
  }

  for (const lang of ["en", "ru"]) {
    game.babele.register({
      module: "solo-of-fortune-dv-tables",
      lang,
      dir: `babele/${lang}`
    });
  }
});