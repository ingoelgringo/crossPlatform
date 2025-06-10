# För G ska följande krav uppfyllas:

[x] Webbanrop görs via useEffect och information från en eller flera webbtjänster visas upp (Använd inte Cities-tjänsten; Det går bra att hämta från en lokal JSON-fil istället för en extern webbtjänst)
[x] Använd { och } likt hur {{ och }} skulle ha använts i Vue.js
[] Använd { och } likt hur v-bind/: skulle ha använts i Vue.js (key-props (relaterade till map) räknas inte)
[x] Använd useState likt hur data skulle ha använts i Vue.js
[x] Använd && likt hur v-if skulle ha använts i Vue.js
[] Använd conditional/ternery-operatorn (? och :) likt hur v-if och v-else skulle ha använts i Vue.js
[x] Använd map och key likt hur v-for och key skulle ha använts i Vue.js
[] Använd events likt hur v-on/@ skulle ha använts i Vue.js
[] En Single Page Application, bestående av minst två webbsidor, ska skapas med React Router eller liknande
[x] Använd komponenter
[x] Använd props
[] Omfattningen på projektet ska vara tillräckligt stor utifrån hur länge projektet pågår

# För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:

[x] Använd useContext eller liknande för (viss) tillståndshantering (Värden ska både kunde sättas och hämtas)
[x] Använd styled-components eller liknande (en CSS-in-JS-lösning) för stilsättning
[] Låt en komponent anpassas efter ett adressparametervärde
[x] Det finns en ESLint-konfiguration för projektet, som alla filer följer
[x] Alla filer är formaterade med Prettier eller liknande
[] Omfattningen på projektet ska vara större än för G

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
