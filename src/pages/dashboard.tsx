import Loader from "@/components/Loader/Loader"
import { Student } from "@/types"
import React, { Suspense, useEffect, useState } from "react"

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const studentKeys = students.length > 0 ? Object.keys(students[0]) : []

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((res) => {
        if (!res.ok) {
          throw new Error("")
        }
        return res.json() as Promise<Student[]>
      })
      .then((data) => {
        setStudents(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <section>
        <h1>Dashboard</h1>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <table>
            <caption>Alumnos</caption>

            <thead>
              <tr>
                {studentKeys.map((key, index) => {
                  return <th key={index}>{key}</th>
                })}
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => {
                return (
                  <tr key={index}>
                    {Object.values(student).map((value, index) => {
                      const isDirection = value === "Direccion"

                      console.log(isDirection)

                      return (
                        <td key={index}>
                          {value}
                          {isDirection && (
                            <button className={"button"}>
                              <span className='fas fa-times'></span>
                            </button>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </section>
    </Suspense>
  )
}

export default Dashboard
