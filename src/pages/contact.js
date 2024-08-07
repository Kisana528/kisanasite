import Head from "../components/Head"

export default function contact() {
  return (
    <>
      <Head
      title="CONTACT"
      description="CONTACT"
      url="/contact/"
      />
      <div className="wrap">
        <h1>お問い合わせ</h1>
        <p>
        私が運営しているブログサイトの<a href="https://ivecolor.com/contact/">お問い合わせフォーム</a>をご使用ください。
        </p>
      </div>
      <style jsx>{`
        .wrap {
          padding: 50px 0 0 0;
        }
      `}</style>
    </>
  )
}