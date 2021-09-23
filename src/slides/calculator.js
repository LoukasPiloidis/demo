import React from "react";
import styled from "styled-components";
import calcSnippet from "../images/calcSnippet.png";

export default function calculator() {
    const evaluate = () => {
        const input = document.getElementById("userInput").value;
        const whiteSpacePattern = /\s+/;
        const inputNoWhiteSpace = input.replace(whiteSpacePattern, '');
        const digitPattern = /(-\d+|\d+)/g;
        const operand = inputNoWhiteSpace.replace(digitPattern, '');
        const resultContainer = document.querySelector(".userResult");
      
        if (inputNoWhiteSpace.match(digitPattern) === null) {
          return resultContainer.innerHTML = "You can only calculate using digits.";
        }
      
        const digitOne = parseInt(inputNoWhiteSpace.match(digitPattern)[0], 10);
        const digitTwo = parseInt(inputNoWhiteSpace.match(digitPattern)[1], 10);
      
        let result;
        switch (operand) {
          case '+':
            result = digitOne + digitTwo;
            break;
          case '':
            result = digitOne + digitTwo;
            break;
          case '-':
            result = digitOne - digitTwo;
            break;
          case '*':
            result = digitOne * digitTwo;
            break;
          case '/':
            if (digitTwo === 0) {
              result = 'Division by zero not allowed.';
            } else {
              result = digitOne / digitTwo;
            }
            break;
          default:
            throw Error('Use proper operator.');
        }
        resultContainer.innerHTML = `Your result is: ${result}`;
      };
      
    return (
        <PageContainer>
            <h1>Kata 1: Calculator</h1>
            <Holder>
                <div className="snippet">
                    <img src={calcSnippet}/>
                </div>
                <div className="result">
                    <form className="form">
                        <p>Try it out:</p>
                            <input type="text" name="converterCtoF" id="userInput"/>
                            <input type="button" value="Submit" id = "submit"
                            onClick = {evaluate}/>
                    </form>
                    <div className="userResult">
                    </div>
                </div>               
            </Holder>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    h1{
        padding-top: 1rem;
        font-size: 7vw;
        text-align: center;
        margin: 0;
    }
    img{
        height: 80vh;
        width: 120%;
    }
`;

const Holder = styled.div`
    font-size: 2vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .result{
        height: 15rem;
        max-width: 20rem;

        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 2.5rem;

            #submit{
                width: 5rem;
                background-color: black;
                margin: 0.5rem 0;
                border-radius: 0.2rem;
                border-color: white;
                border-style: solid;
                color: white;
            }

            #submit:hover{
                background-color: white;
                border-color: gray;
                cursor: pointer;
                color: black;
            }
        }

        .userResult{
            margin: 1rem 0;
            text-align: center;
        }
    }
`;