import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed: ${email} (mocked)`)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-24 right-4 bg-gray-800 p-4 rounded shadow-md z-40">
      <label className="text-sm mb-1 block">Subscribe for updates</label>
      <input
        type="email"
        placeholder="you@example.com"
        className="px-3 py-1 rounded text-black mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="bg-accent text-black w-full py-1 rounded font-bold">Join</button>
    </form>
  )
}

export default Newsletter
