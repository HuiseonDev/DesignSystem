/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useRouteError } from "react-router-dom";
import variables from "../../styles/Variables";
import { TypoCapSmR, TypoTitleMdSb } from "../../styles/Common";

const Error = () => {
  const error = useRouteError();
  if (error) console.error(error);

  return (
    <section css={errorWr}>
      <div css={titleBox}>
        <h1 css={TypoTitleMdSb}>ERROR</h1>
        <div css={errorImgWr}>
          <img src="/img/ErrorLight.svg" alt="에러 이미지" />
        </div>
      </div>

      <div css={btnBox}>
        <button>이전으로 </button>
      </div>
    </section>
  );
};

export default Error;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoCapSmR};
  color: ${variables.colors.gray700};
`;

const errorWr = css`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 ${variables.layoutPadding};
  text-align: center;

  h1 {
    padding-bottom: 4rem;
    ${Montserrat}
  }
`;

const titleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const errorImgWr = css`
  width: 40%;
  margin: 0 auto;
`;

const btnBox = css`
  margin: 10rem auto 0 auto;
`;
