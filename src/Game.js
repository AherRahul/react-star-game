import React, {useEffect, useState} from 'react';
import utils from './utiles.js';
import NumberButton from './NumberButton.js';
import Star from './Star';
import PlayAgain from './PlayAgain';
import useGameState from './useGameState';

const Game = (props) => {
    const { stars, availableNums, candidateNums, secondsLeft, setGameState } = useGameState()
    
    const candidateAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

    const numberStatus = (num) => {
        if (!availableNums.includes(num)) {
            return 'used';
        }

        if (candidateNums.includes(num)) {
            return candidateAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    }

    const onNumberClick = (num, currentStatus) => {
        if (currentStatus === 'used' || gameStatus != 'active') {
            return;
        }

        const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(num) : candidateNums.filter(cn => cn !== num);
        
        setGameState(newCandidateNums);
    }

    return ( 
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active' ? <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} /> : <Star count={stars} />}
                </div>
                <div className="right">
                    {utils.range(1, 9).map(numberbtn => 
                        <NumberButton 
                            key = {numberbtn} 
                            status = {numberStatus(numberbtn)}
                            numberbtn = {numberbtn} 
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
     );
}
 
export default Game;