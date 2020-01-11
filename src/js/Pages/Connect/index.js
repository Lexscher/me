import React, { useState } from "react";
import SocialMediaLink from "../../Components/SocialMedia";

const Connect = () => {
  // set state
  const [connectMode, toggleConnectMode] = useState(false);

  // Set svg paths to variablses
  const [
    linkedinSvgPath,
    githubSvgPath,
    twitterSvgPath,
    mediumSvgPath,
    resumeSvgPath
  ] = [
    "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    "M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z",
    "M11 9c1.361-5.928 8-7 8-7v-2l4 3.982-4 4.018v-2s-5.102-.104-8 3zm5 1h-10v1h10v-1zm3 .835v2.708c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h10.741c1.176-.758 2.35-1.242 3.259-1.541v-.459h-16v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-5.561l-2 2.01zm-13 3.165h10v-1h-10v1zm3.609-7h-3.609v1h3.266l.343-1z"
  ];

  const socialMediaInfoArray = [
    {
      id: "linkedin-svg",
      link: "https://www.linkedin.com/in/alexanderschelchere/",
      title: "LinkedIn",
      svgPath: linkedinSvgPath
    },
    {
      id: "github-svg",
      link: "https://github.com/Lexscher",
      title: "GitHub",
      svgPath: githubSvgPath
    },
    {
      id: "twitter-svg",
      link: "https://twitter.com/Lexscher",
      title: "Twitter",
      svgPath: twitterSvgPath
    },
    {
      id: "medium-svg",
      link: "https://medium.com/@lexscher",
      title: "Medium",
      svgPath: mediumSvgPath
    },
    {
      id: "resume-svg",
      link:
        "https://drive.google.com/file/d/1NGEpQqUyIGlztN_euKAvxyJgMEtZ2Oor/view",
      title: "Resume",
      svgPath: resumeSvgPath
    }
  ];

  const socialMediaLinks = socialMediaInfoArray.map(mediaInfo => (
    <SocialMediaLink key={mediaInfo.id} socialMediaData={mediaInfo} />
  ));

  const connectButton = () => (
    <button
      className={!connectMode ? "btn-connect btn-hiding-content" : "btn-connect"}
      onClick={() => toggleConnectMode(!connectMode)}
    >
      {!connectMode ? "✚" : "✘"}
    </button>
  );

  return (
    <div className="connect-tab">
      <div className={connectMode ? "social-media animate-social-media" : "social-media"}>
        {connectMode ? socialMediaLinks : ""}
      </div>
        {connectButton()}
    </div>
  );
};

export default Connect;
