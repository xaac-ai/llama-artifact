import { LlamaParseReader } from "llamaindex";

async function main() {
  const path = "./data/pto_policy_employee.docx";

  const reader = new LlamaParseReader({ resultType: "markdown" });

  const documents = await reader.loadData(path);

  console.log(documents);
}

main().catch(console.error);
