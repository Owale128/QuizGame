

interface IDisplayHighScores {
    highScores: {username: string, score: number}[];
    handleBackBtn: () => void;
}

const DisplayHighScores = ({highScores, handleBackBtn}:IDisplayHighScores) => {
  return (
    <div>
        <table className="bg-black border">
    <thead>
        <tr>
        <th className="p-3  text-white">Rank</th>
        <th className="p-3  text-white">Username</th>
        <th className="p-3  text-white">Score</th>
        </tr>
    </thead>

    <tbody>
        {highScores.map((player, index) => (
        <tr key={index} className="border-b border-gray-200">
            <td className="p-4 text-lg text-white">{index + 1}</td>
            <td className="text-lg  text-white">{player.username}</td>
            <td className="text-lg  text-white">{player.score}</td>
        </tr>
        ))}
        </tbody>
        </table>

        <button className="border-2 border-black rounded p-1 bg-black text-white  active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition ease-in duration-150 mt-3" 
        onClick={handleBackBtn}>
            Back
        </button>
    </div>
  )
}

export default DisplayHighScores
