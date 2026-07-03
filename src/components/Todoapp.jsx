import React, { useMemo, useState } from 'react'
import { FiPlus, FiCheck, FiTrash2, FiRotateCcw, FiX } from 'react-icons/fi'

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600&display=swap');
@keyframes ta-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes ta-pop { 0% { transform: scale(0.6); } 60% { transform: scale(1.15); } 100% { transform: scale(1); } }
.ta-item { animation: ta-rise .28s cubic-bezier(.2,.8,.2,1) both; }
.ta-pop { animation: ta-pop .3s cubic-bezier(.2,.8,.2,1) both; }
@media (prefers-reduced-motion: reduce) { .ta-item, .ta-pop { animation: none; } }`

const TABS = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'done', label: 'Done' },
    { key: 'trash', label: 'Trash' },
]

const Todoapp = () => {
    const [todos, setTodos] = useState([])
    const [deleted, setDeleted] = useState([])
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('all')

    const addTodo = (e) => {
        e.preventDefault()
        const text = input.trim()
        if (text === '') return
        setTodos([{ id: Date.now(), text, done: false }, ...todos])
        setInput('')
    }

    const toggleTodo = (id) =>
        setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

    // Removing a todo doesn't destroy it — it moves to Trash so it stays visible.
    const removeTodo = (id) => {
        const target = todos.find((t) => t.id === id)
        if (!target) return
        setTodos(todos.filter((t) => t.id !== id))
        setDeleted([{ ...target }, ...deleted])
    }

    // Clear All sweeps every remaining task into the Trash rather than erasing it.
    const clearAll = () => {
        if (todos.length === 0) return
        setDeleted([...todos, ...deleted])
        setTodos([])
    }

    const restoreTodo = (id) => {
        const target = deleted.find((t) => t.id === id)
        if (!target) return
        setDeleted(deleted.filter((t) => t.id !== id))
        setTodos([{ ...target }, ...todos])
    }

    const purgeTodo = (id) => setDeleted(deleted.filter((t) => t.id !== id))
    const emptyTrash = () => setDeleted([])

    const doneCount = todos.filter((t) => t.done).length
    const total = todos.length
    const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100)

    // Active tasks float to the top, completed ones sink to the bottom.
    const sorted = useMemo(
        () => [...todos].sort((a, b) => Number(a.done) - Number(b.done)),
        [todos],
    )

    const visible = useMemo(() => {
        if (filter === 'active') return sorted.filter((t) => !t.done)
        if (filter === 'done') return sorted.filter((t) => t.done)
        return sorted
    }, [sorted, filter])

    const counts = {
        all: total,
        active: total - doneCount,
        done: doneCount,
        trash: deleted.length,
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#f5f6fb] to-[#e9ecf6] px-4 py-10 sm:py-16 text-[#1b1b26]">
            <style>{FONTS}</style>

            <main className="mx-auto w-full max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                {/* Header */}
                <header className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6C4CF1]">
                        Today
                    </p>
                    <h1
                        className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1b1b26]"
                        style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                    >
                        Tasks
                    </h1>

                    {/* Progress meter — the signature element */}
                    <div className="mt-5 flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#dfe2ee]">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-[#6C4CF1] to-[#12B886] transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <span className="w-24 text-right text-sm font-medium text-[#6b6b7d]">
                            {doneCount} of {total} done
                        </span>
                    </div>
                </header>

                {/* Add form */}
                <form onSubmit={addTodo} className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="What needs doing?"
                        className="flex-1 rounded-xl border border-[#e2e4ef] bg-white px-4 py-3 text-[15px] shadow-sm outline-none transition focus:border-[#6C4CF1] focus:ring-4 focus:ring-[#6C4CF1]/15"
                    />
                    <button
                        type="submit"
                        className="flex items-center gap-1.5 rounded-xl bg-[#6C4CF1] px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-[#5a3ee0] active:scale-95"
                    >
                        <FiPlus size={18} /> Add
                    </button>
                </form>

                {/* Tabs */}
                <nav className="mt-6 flex items-center gap-1 rounded-xl border border-[#e2e4ef] bg-white/70 p-1">
                    {TABS.map((tab) => {
                        const active = filter === tab.key
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setFilter(tab.key)}
                                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-semibold transition ${
                                    active
                                        ? 'bg-[#6C4CF1] text-white shadow-sm'
                                        : 'text-[#6b6b7d] hover:bg-[#f1f2f9]'
                                }`}
                            >
                                {tab.label}
                                <span
                                    className={`rounded-full px-1.5 text-[11px] ${
                                        active ? 'bg-white/25' : 'bg-[#eceef6] text-[#8b8ba0]'
                                    }`}
                                >
                                    {counts[tab.key]}
                                </span>
                            </button>
                        )
                    })}
                </nav>

                {/* List */}
                <section className="mt-4 space-y-2">
                    {filter === 'trash' ? (
                        deleted.length === 0 ? (
                            <EmptyState
                                title="Trash is empty"
                                hint="Deleted tasks show up here so nothing gets lost."
                            />
                        ) : (
                            deleted.map((todo) => (
                                <TrashRow
                                    key={todo.id}
                                    todo={todo}
                                    onRestore={() => restoreTodo(todo.id)}
                                    onPurge={() => purgeTodo(todo.id)}
                                />
                            ))
                        )
                    ) : visible.length === 0 ? (
                        <EmptyState
                            title={filter === 'done' ? 'Nothing finished yet' : 'All clear'}
                            hint={
                                filter === 'done'
                                    ? 'Check off a task and it will land here.'
                                    : 'Add your first task above to get started.'
                            }
                        />
                    ) : (
                        visible.map((todo) => (
                            <TodoRow
                                key={todo.id}
                                todo={todo}
                                onToggle={() => toggleTodo(todo.id)}
                                onRemove={() => removeTodo(todo.id)}
                            />
                        ))
                    )}
                </section>

                {/* Footer actions */}
                {(filter !== 'trash' && total > 0) && (
                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={clearAll}
                            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#8b8ba0] transition hover:bg-[#f7ebeb] hover:text-[#F0483E]"
                        >
                            <FiTrash2 size={15} /> Clear all
                        </button>
                    </div>
                )}
                {(filter === 'trash' && deleted.length > 0) && (
                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={emptyTrash}
                            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white bg-[#F0483E] transition hover:bg-[#d83a30]"
                        >
                            <FiTrash2 size={15} /> Empty trash
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

const TodoRow = ({ todo, onToggle, onRemove }) => (
    <div className="ta-item group flex items-center gap-3 rounded-xl border border-[#e9eaf2] bg-white px-3.5 py-3 shadow-sm transition hover:border-[#d5d7e6]">
        <button
            onClick={onToggle}
            aria-label={todo.done ? 'Mark as not done' : 'Mark as done'}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition ${
                todo.done
                    ? 'ta-pop border-[#12B886] bg-[#12B886] text-white'
                    : 'border-[#cfd2e2] text-transparent hover:border-[#6C4CF1]'
            }`}
        >
            <FiCheck size={15} strokeWidth={3} />
        </button>

        <span
            className={`flex-1 text-[15px] transition ${
                todo.done ? 'text-[#a2a2b3] line-through' : 'text-[#1b1b26]'
            }`}
        >
            {todo.text}
        </span>

        <button
            onClick={onRemove}
            aria-label="Move to trash"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#c3c5d4] opacity-0 transition group-hover:opacity-100 hover:bg-[#f7ebeb] hover:text-[#F0483E]"
        >
            <FiTrash2 size={16} />
        </button>
    </div>
)

const TrashRow = ({ todo, onRestore, onPurge }) => (
    <div className="ta-item flex items-center gap-3 rounded-xl border border-dashed border-[#e2c9c9] bg-[#fcf6f6] px-3.5 py-3">
        <span className="flex-1 text-[15px] text-[#a2a2b3] line-through">{todo.text}</span>
        <button
            onClick={onRestore}
            aria-label="Restore task"
            className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm font-medium text-[#6C4CF1] transition hover:bg-[#efecff]"
        >
            <FiRotateCcw size={15} /> Restore
        </button>
        <button
            onClick={onPurge}
            aria-label="Delete forever"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#c3a3a3] transition hover:bg-[#f4dede] hover:text-[#F0483E]"
        >
            <FiX size={17} />
        </button>
    </div>
)

const EmptyState = ({ title, hint }) => (
    <div className="rounded-xl border border-dashed border-[#dfe2ee] bg-white/50 px-6 py-12 text-center">
        <p className="font-semibold text-[#4a4a5a]">{title}</p>
        <p className="mt-1 text-sm text-[#9a9aab]">{hint}</p>
    </div>
)

export default Todoapp
