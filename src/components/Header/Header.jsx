/* eslint-disable max-len */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import imageHeader from '../Image/logotip.jpg'
import headerStales from './header.module.css'
import cart from '../Image/basket.jpg'
import { getAllCartProductsSelector } from '../../Redux/slices/cartSlice'
import heard from '../Image/herd.jpg'
import { getUserSelector, logOut } from '../../Redux/slices/userSlice'
import person from '../Image/persona.png'

export function Header() {
  const cartProducts = useSelector(getAllCartProductsSelector)
  const { id: userId } = useSelector(getUserSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/signin')
  }
  return (
    <header className={headerStales.wr}>
      <div className={headerStales.logo}>
        {' '}
        <Link to="/">
          {' '}
          <img src={imageHeader} alt="" />
        </Link>
        <Link to="/products"><button type="button" className="btn btn-primary">Каталог</button></Link>
      </div>
      {userId ? (
        <div className={headerStales.btnwr}>
          <Link to="/favorites">
            <img src={heard} alt="favorites link" style={{ width: '70px', height: '70px', padding: '13px' }} />

          </Link>
          <Link to={`/user/${userId}`}>
            <img src={person} alt="profile link" style={{ width: '70px', height: '70px', padding: '13px' }} />
          </Link>
          <div className={headerStales.cart}>
            <Link to="/cart">
              <img
                src={cart}
                alt="Корзина"
              />
            </Link>
            <span className={headerStales.number}>
              {cartProducts.length}
            </span>
          </div>
          <button className="btn btn-info mx-2" type="button" onClick={handleLogOut}>Выйти</button>
        </div>
      ) : (
        <div>
          <Link to="/signup"><button type="button" className="btn btn-primary">Регистрация</button></Link>
          <Link to="/signin"><button type="button" className="btn btn-success">Вход</button></Link>

        </div>
      )}
    </header>

  )
}
