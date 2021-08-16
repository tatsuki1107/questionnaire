
import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import Container from '@material-ui/core/Container'
import { Input } from "@material-ui/core"
import firebase from "../config/Firebase"


//<input type="birth" id="birth" {...register("birth", { required: true, pattern: /^(19[0-9]{2}|20[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/ })} />

export default function Home() {

  const { register, handleSubmit, formState: { errors }, control, watch } = useForm()

  const onSubmit = (data) => {

    firebase.firestore().collection('datas')
      .add({
        language: data.Language,
        wasLearning: data.wasLearning,
        isLearning: data.isLearning,
        birth: data.birth,
        name: data.name

      })
  }

  // useEffect(() => {
  // firebase.firestore()

  // }, [])

  const watchisLearning = watch("isLearning")
  const watchwasLearning = watch("wasLearning")

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1.名前を入力してください。(匿名可)</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>
          <div>
            <label htmlFor="birth">Q2.誕生日を教えて下さい。(例: 20001107)</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^(19[0-9]{2}|20[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />

            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>
          <div>
            <span>Q3.現在プログラミングを学習していますか?   </span>

            <label htmlFor="isLearning">はい</label>
            <input
              id="isLearning1" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="はい"
              htmlFor="isLearning1"
            />

            <label htmlFor="isLearning">いいえ</label>
            <input
              id="isLearning2" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="いいえ"
              htmlFor="isLearning2"
            />


            <label htmlFor="isLearning">わからない</label>
            <input
              id="isLearning3" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="わからない"
              htmlFor="isLearning3"
            />

            {
              errors.isLearning &&
              <span>このフィールドは回答必須です。</span>
            }

          </div>

          <div>
            <span>Q4.これまでにプログラミングを学習したことはありますか?   </span>

            <label htmlFor="wasLearning1">はい</label>
            <input
              id="wasLearning1" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="はい"
            />
            <label htmlFor="wasLearning2">いいえ</label>
            <input
              id="wasLearning2" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="いいえ"
            />

            <label htmlFor="wasLearning3">わからない</label>
            <input
              id="wasLearning3" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="わからない"
            />

          </div>
          {
            errors.wasLearning &&
            <span>このフィールドは回答必須です。</span>
          }
          {
            watchisLearning === "はい" | watchwasLearning === "はい" ?
              <div>
                <span>Q5.今まで学習したことのあるプログラミング言語を全て教えて下さい</span>
                <label htmlFor="Language1">Javascript</label>
                <input
                  id="Language1" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Javascript"
                />
                <label htmlFor="Language2">PHP</label>
                <input
                  id="Language2" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="PHP"
                />
                <label htmlFor="Language3">Ruby</label>
                <input
                  id="Language3" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Ruby"
                />
                <label htmlFor="Language4">Python</label>
                <input
                  id="Language4" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Python"
                />
                <label htmlFor="Language5">C</label>
                <input
                  id="Language5" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="C"
                />
                <label htmlFor="Language6">Swift</label>
                <input
                  id="Language6" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Swift"
                />
                <label htmlFor="Language7">Go</label>
                <input
                  id="Language7" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Go"
                />
                <label htmlFor="Language8">Java</label>
                <input
                  id="Language8" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="Java"
                />
                <label htmlFor="Language9">C++</label>
                <input
                  id="Language9" {...register("Language", { required: true })}
                  name="Language"
                  type="checkbox"
                  value="C++"
                />

              </div> : null
          }


          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  )

}
