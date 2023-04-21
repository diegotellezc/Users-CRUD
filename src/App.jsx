import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"
import Header from "./components/Header"
import { useForm } from "react-hook-form"
import UsersList from "./components/UsersList"

const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [users, setUsers] = useState([])
  const [isShowedForm, setIsShowedForm] = useState(false)

  const { register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    createUser(data)
  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios.post(URL, data)
    .then(() => {
      getAllUsers()
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
        image_url: ""
      })
      setIsShowedForm(!isShowedForm)
    })
    .catch((err) => console.log(err))
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
    <main className="font-sans">
      <Header setIsShowedForm={setIsShowedForm} />

      <Modal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} />

      <UsersList users={users} />
    </main>
  )
}

export default App
