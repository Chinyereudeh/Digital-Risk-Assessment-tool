function calculateRisk() {
  let score = 0;
  let flags = [];

  const encryption = document.getElementById("encryption").value;
  const access = parseInt(document.getElementById("access").value);
  const dataType = document.getElementById("dataType").value;
  const bias = document.getElementById("bias").checked;
  const surveillance = document.getElementById("surveillance").checked;

  if (encryption === "no") {
    score += 30;
    flags.push("⚠️ Data is not encrypted.");
  }

  if (access < 5) {
    score += 25;
    flags.push("⚠️ Weak access control.");
  }

  if (dataType === "health") {
    score += 20;
    flags.push("⚠️ Sensitive health data.");
  }

  if (bias || surveillance) {
    score += 25;
    if (bias) flags.push("⚠️ Ethical concern: Bias in AI.");
    if (surveillance) flags.push("⚠️ Ethical concern: Surveillance risk.");
  }

  document.getElementById("results").innerHTML = `
    <h2>Risk Score: ${score}/100</h2>
    ${flags.map(f => `<p>${f}</p>`).join("")}
  `;
}

