import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import s from './equipmentInfo.module.css'

import { changeRacketBase, changeRacketForhand, changeRacketBackhand } from '../../../../redux/profile-reducer'

function EquipmentInfo({ base, forehandPad, backhandPad }) {
  const location = useLocation()
  const dispatch = useDispatch()

  // const [equipData, setEquipData] = useState({
  //   base: base || '',
  //   forehandPad: forehandPad || '',
  //   backhandPad: backhandPad || '',
  // })

  const handlerChangeRacketBase = (e) => {
    const text = e.target.value
    dispatch(changeRacketBase(text))
  }
  const handlerChangeRacketForhand = (e) => {
    const text = e.target.value
    dispatch(changeRacketForhand(text))
  }
  const handlerChangeRacketBackhand = (e) => {
    const text = e.target.value
    dispatch(changeRacketBackhand(text))
  }

  return (
    <div className={s.EquipmentInfo}>
      {location.pathname === '/profile' && (
        <>
          <div className={s.header}>
            <h3>Ракетка</h3>
          </div>
          <div className={s.hardInfo}>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Основание</p>
                <p className={s.rightColumn}>{base}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Форхенд</p>
                <p className={s.rightColumn}>{forehandPad}</p>
              </div>
            </div>
            <div className={s.item}>
              <div>
                <p className={s.leftColumn}>Бекхэнд</p>
                <p className={s.rightColumn}>{backhandPad}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {location.pathname === '/edit-my-profile' && (
        <>
          <div className={s.header}>
            <h3>Ракетка</h3>
          </div>
          <div className={s.wrapper}>
            <div className={s.inpItem}>
              <span className={`${s.leftColumn}`}>Основание</span>
              <input
                value={base}
                // ref={racketBaseInput}
                onChange={handlerChangeRacketBase}
              />
            </div>
            <div className={s.birthday_gender}>
              <div className={s.inpItem}>
                <span className={`${s.leftColumn}`}>Форхенд</span>
                <input
                  value={forehandPad}
                  // ref={racketForhandInput}
                  onChange={handlerChangeRacketForhand}
                />
              </div>
              <div className={s.inpItem}>
                <span className={`${s.leftColumn}`}>Бекхенд</span>
                <input
                  value={backhandPad}
                  // ref={racketBackhandInput}
                  onChange={handlerChangeRacketBackhand}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EquipmentInfo
