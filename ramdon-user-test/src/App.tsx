import React, { Fragment, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import axios from 'axios';
import { IUser } from "./dtos/IUser";
import { icons } from "./utils/Icons"

export const App = () => {
  const [user, setUser] = useState<IUser[]>([])
  const [load, setLoad] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLink, setActiveLink] = useState<React.SetStateAction<any>>()

  const style = {
    color: "green",
    margin: "20px"
  }

  const Phrase: React.FC<IUser | any> = ({user}) => {
    console.log(user.name)

    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email is ${user.email}`,
      `I was born on ${user.dob.date.slice(0,10)}`,
      `My phone number is ${user.phone}`,
    ]

    return <h1>{phrases[activeLink]}</h1>
  }

  const ativeLinkHandler = (index: number) => {
    setActiveLink(index)
  }

  const onClickHandler = () => {
    setActiveLink(0)
    setLoad(true);
    axios.get<IUser[]>(`https://randomuser.me/api/`).then(async (response) => {
      console.log(response.data.results)

      setUser(response.data.results)
      console.log(user)

    }).catch(async (err) => {
      console.log(err)

      setLoad(true)

    }).finally(async () => {
      setLoad(false)
      setActiveUser(true)
    })
  }


  return (
    <div className="App">
      <h1>Random User Generator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler} />
      {

        load ? (
          <h1>Loading...</h1>

        ) : (
          <div className="app_user">
            {
              user.map((user) => {
                return (
                  <Fragment key={user.cell} >
                    <img src={user.picture.large} alt="#" />

                    <Phrase user={user} />

                    <div className="app__icons">
                      {
                        icons.map((icon, index) => {
                          return <i style={activeLink === index ? style : undefined} className={icon} key={index} onMouseEnter={() => ativeLinkHandler(index)}></i>
                        })
                      }
                    </div>
                  </Fragment>
                )
              })
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
