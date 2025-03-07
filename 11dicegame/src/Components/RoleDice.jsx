import React, { useState } from "react";
import styled from "styled-components";

function RoleDice({
    roleDice, currentDice
}) {

  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}
      >
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 24px;
  }
  .dice{
    cursor: pointer;
  }
`;
