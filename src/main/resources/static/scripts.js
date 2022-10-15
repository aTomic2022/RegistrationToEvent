import { renderPersonTable } from "./person-table.js";
import { handlePersonFormSubmit } from "./add-person-form.js";

(async () => {
  await renderPersonTable();
  await handlePersonFormSubmit();
})();
