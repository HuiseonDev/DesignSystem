/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import variables from "../../styles/Variables";
import { TypoBodyMdR } from "../../styles/Common";

const Home = () => {
  return (
    <>
      <div css={Title}>
        <h1>STYLE GUIDE</h1>
        <div css={ButtonWrapper}>
          <button>Toucheese</button>
          <button>Trifly</button>
          <button>Portfolio</button>
          <button>Wish</button>
        </div>
      </div>
    </>
  );
};

export default Home;

const Title = css`
  padding: 1rem;
  border-bottom: 1px solid ${variables.colors.gray900};
  height: fit-content;
  position: absolute;
  width: calc(100vw - ${variables.layoutPadding} * 2);
  left: 50%;
  top: 3rem;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: ${variables.colors.gray900};
    ${TypoBodyMdR}
  }
`;

const ButtonWrapper = css`
  display: flex;
  gap: 1rem;

  & > button {
    padding: 0.8rem 2rem;
    background-color: ${variables.colors.gray400};
    border-radius: 6rem;
    color: ${variables.colors.gray900};
  }
`;
