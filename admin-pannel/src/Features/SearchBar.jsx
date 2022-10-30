import { useEffect, useState } from "react";
import styled from "styled-components";
export default function SearchBar({ searcingbar, maindata }) {
  const [searching, setSearching] = useState("");
  const [active, setActive] = useState(0);
  let handleChange = (e) => {
    setSearching(e.target.value);
  };
  useEffect(() => {
    searcingbar(searching);
  }, [searching, searcingbar]);
  return (
    <MainWrapper>
      <InputWrapper>
        <Input
          type={"text"}
          value={searching}
          onChange={handleChange}
          placeholder={"Search Your Countries Here"}
        />
      </InputWrapper>
      {maindata.length > 0 && (
        <MapWrapper active={active} limit={5}>
          {maindata.map((item, index) => (
            <div
              key={index}
              onMouseOver={() => {
                setActive(index + 1);
              }}
            >
              {item}
            </div>
          ))}
        </MapWrapper>
      )}
    </MainWrapper>
  );
}

let MainWrapper = styled.div`
  width: 357px;
  height: auto;
  margin: auto;
`;
let InputWrapper = styled.div`
  width: 450px;
  height: auto;
  padding: 10px;
`;
let Input = styled.input`
  width: 400px;
  padding: 8px;
  border: none;
  outline: none;
  border: 2px solid black;
  background: rgb(219, 219, 219);
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  border-left-color: rgb(0, 191, 255);
`;
let MapWrapper = styled.div`
  margin-bottom: 100px;
  width: 400px;
  border: 1px solid black;
  display: flex;
  z-index: 2;
  flex-direction: column;
  max-height: ${({ limit }) => `${limit * 38.67}px`};
  margin: auto;
  overflow: auto;
  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 30px;
  }
  & :nth-child(${({ active }) => active}) {
    background: white;
    cursor: pointer;
  }
`;
