import { useState } from 'react'
import employees from './Data'
import './App.css'

function App() {
  const [team, setTeam] = useState([])

  const add = (e) => {
    setTeam([...team, e]);
  }

  const remove = (t) => {
    setTeam(team.filter((e) => e !== t))
  }

  const sort = () => {
    let sort = [...team].sort((a, b) => a.age - b.age)
    setTeam(sort)
  }

  const averageAge = () => {
    if (team.length === 0) return 0;
    const avAge = team.reduce((sum, e) => sum + e.age, 0);
    return (avAge / team.length).toFixed(2);
  };



  return (
    <>
      <div className='main-container'>
        <div  className="employee-list">
          <h2>Employee List</h2>
          <ul>
            {
              employees.map((employe) => (
                <li key={employe.id} >
                  <span>{employe.first_name} {employe.last_name} (age:{employe.age})</span>
                  <button onClick={() => add(employe)} disabled={team.includes(employe)}  style={{ backgroundColor: team.includes(employe) ? '#e15c5c' : '#007bff' }}>Add</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="team-list">
          <h2>Team List</h2>
          <button className="sort" style={{backgroundColor:'green'}} onClick={sort}>Sort by Age</button>
          <div className="age">Average Age: {averageAge()}</div>
          <ul>
            {
              team.length === 0 ?
                (
                  <p style={{ color: 'red', fontSize:'20px' }}>Select Employee</p>
                ) :
                (
                  team.map((t) => (
                    <li key={t.id}>
                      <span>{t.first_name} {t.last_name} (age:{t.age})</span>
                      <button onClick={() => remove(t)}>Remove</button>
                    </li>
                  ))
                )
            }
          </ul>

        </div>
      </div>
    </>
  )
}

export default App


