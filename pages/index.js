import Head from "next/head";
import Script from "next/script";

const templateData = {
  name: "Vaidyuti",
  about: "rebuilding the power grid ⚡",
  primaryColor: "black",
  socialLinks: ["https://github.com/Vaidyuti"],
  repositories: ["Vaidyuti/vems", "rithviknishad/prosumer"],
};

export default function Home() {
  return (
    <div>
      <Head>
        <script
          type="application/json"
          id="my-template-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(templateData) }}
        />
      </Head>
      <div id="root"></div>
      <Script src="https://cdn.jsdelivr.net/npm/mytemplate.xyz@0.5.1/build/Index.js" />
    </div>
  );
}
