import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, DEFAULT_VALUES, DIEGO, JUNIOR, WILL } from "./constants.js"
import Modal from "./components/Modal"
import Header from "./components/Header"
import { useForm } from "react-hook-form"
import UsersList from "./components/UsersList"
import Swal from 'sweetalert2'
import Footer from "./components/Footer"
import './App.css'
import ButtonDefault from "./components/ButtonDefault.jsx"


function App() {
  const [users, setUsers] = useState([])
  const [isUserIdToEdit, setIsUserIdToEdit] = useState()
  const [isShowedForm, setIsShowedForm] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null
    }

    if(!data.image_url){
      data.image_url = null
    }

    if(isUserIdToEdit){
      editUser(data)
    } else {
      createUser(data)
    }

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 2500
    })
    
  }

  const createDefaultUsers = () => {
    createUser(DIEGO)
    createUser(JUNIOR)
    createUser(WILL)

    Swal.fire({
      icon: 'success',
      title: 'Registros exitosos',
      showConfirmButton: false,
      timer: 2500
    })

  }
  

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios.post(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowedForm(false)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`

    axios.delete(URL)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Eliminación exitosa',
        showConfirmButton: false,
        timer: 1500
      })
      getAllUsers()
    })
    .catch((err) => console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${isUserIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllUsers()
      reset(DEFAULT_VALUES)
      setIsShowedForm(!isShowedForm)
      setIsUserIdToEdit()
    })
    .catch((err) => console.log(err))
  }
  
  const handleClickEdit = (data) => {
    setIsShowedForm((isShowedForm) => !isShowedForm )
    reset(data)
    setIsUserIdToEdit(data.id)
  }
  
  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"

    axios.get(URL)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))
  }
  

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header setIsShowedForm={setIsShowedForm} />

      <main className="flex-grow relative">
        <Modal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} setIsUserIdToEdit={setIsUserIdToEdit} isUserIdToEdit={isUserIdToEdit} errors={errors} />

        {
          users.length === 0 ? <ButtonDefault createDefaultUsers={createDefaultUsers} /> : <UsersList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit} />
        }
        
      </main>

      <Footer />
    </div>
  )
}

export default App
