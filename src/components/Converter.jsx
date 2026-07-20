import React from 'react'
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import { TbArrowsExchange } from 'react-icons/tb'

const Converter = () => {
    const [data, setaData] = useState(null)
    const [status, setStatus] = useState('loading')
    const [amount, setAmount] = useState('100')
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('UZS')

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
                setaData(response.data.rates);
                setStatus('ready');
            } catch (error) {
                console.error("Error fetching data:", error);
                setStatus('error');
            }
        }
        getData();
    }, []);

    const currencyNames = useMemo(() => {
        try {
            return new Intl.DisplayNames(['uz'], { type: 'currency' })
        } catch {
            return null
        }
    }, [])

    const fmt = useMemo(() => new Intl.NumberFormat('uz-UZ', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }), [])

    const fmtRate = useMemo(() => new Intl.NumberFormat('uz-UZ', {
        maximumFractionDigits: 4,
    }), [])

    const codes = data ? Object.keys(data) : []
    const rate = data && data[from] && data[to] ? data[to] / data[from] : null
    const amt = parseFloat(amount)
    const result = rate !== null && !isNaN(amt) ? amt * rate : null

    const nameOf = (code) => {
        if (!currencyNames) return ''
        try {
            const name = currencyNames.of(code)
            return name === code ? '' : name
        } catch {
            return ''
        }
    }

    const swap = () => {
        setFrom(to)
        setTo(from)
    }

    return (
        <div className='cv-root relative min-h-screen overflow-hidden bg-[#0A2620] text-[#EDE8D8]'>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
                .cv-root { font-family: 'Space Grotesk', system-ui, sans-serif; color-scheme: dark; }
                .cv-mono { font-family: 'IBM Plex Mono', monospace; font-variant-numeric: tabular-nums; }
                .cv-rosette {
                    position: absolute;
                    border-radius: 9999px;
                    background: repeating-radial-gradient(circle at center,
                        rgba(200, 162, 75, 0.14) 0px, rgba(200, 162, 75, 0.14) 1px,
                        transparent 1px, transparent 10px);
                    -webkit-mask-image: radial-gradient(circle, black 25%, transparent 68%);
                    mask-image: radial-gradient(circle, black 25%, transparent 68%);
                    pointer-events: none;
                }
                .cv-input::-webkit-outer-spin-button,
                .cv-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
                .cv-input { -moz-appearance: textfield; appearance: textfield; }
                .cv-select {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23C8A24B' stroke-width='1.5'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 0.75rem center;
                }
                .cv-root :is(input, select, button):focus-visible {
                    outline: 2px solid #C8A24B;
                    outline-offset: 2px;
                }
                @media (prefers-reduced-motion: reduce) {
                    .cv-root * { transition: none !important; }
                }
            `}</style>

            <div className='cv-rosette -top-40 -right-40 h-[34rem] w-[34rem]' aria-hidden='true'></div>
            <div className='cv-rosette -bottom-52 -left-52 h-[40rem] w-[40rem]' aria-hidden='true'></div>

            <main className='relative mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-5 py-14'>
                <header className='mb-8 text-center'>
                    <p className='cv-mono mb-3 text-[11px] uppercase tracking-[0.3em] text-[#C8A24B]'>
                        Real vaqt kurslari
                    </p>
                    <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
                        Valyuta konvertori
                    </h1>
                    <p className='mt-3 text-sm text-[#8FAE9F]'>
                        Jahon valyutalari — AQSH dollari asosida, har kuni yangilanadi
                    </p>
                </header>

                <section className='rounded-2xl border border-[#C8A24B]/20 bg-[#0F332B] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] sm:p-8'>
                    <label htmlFor='cv-amount' className='cv-mono block text-[11px] uppercase tracking-[0.2em] text-[#8FAE9F]'>
                        Miqdor
                    </label>
                    <input
                        id='cv-amount'
                        className='cv-input cv-mono mt-2 w-full border-b border-[#C8A24B]/30 bg-transparent pb-3 text-4xl text-[#EDE8D8] placeholder-[#8FAE9F]/50 transition-colors focus:border-[#C8A24B] focus:outline-none'
                        type='number'
                        min='0'
                        inputMode='decimal'
                        placeholder='0'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <div className='mt-7 grid grid-cols-[1fr_auto_1fr] items-end gap-3'>
                        <div>
                            <label htmlFor='cv-from' className='cv-mono block text-[11px] uppercase tracking-[0.2em] text-[#8FAE9F]'>
                                Dan
                            </label>
                            <select
                                id='cv-from'
                                className='cv-select cv-mono mt-2 w-full cursor-pointer appearance-none rounded-lg border border-[#C8A24B]/25 bg-[#0A2620] px-3 py-2.5 text-lg text-[#EDE8D8] transition-colors hover:border-[#C8A24B]/60 focus:outline-none disabled:cursor-wait disabled:opacity-50'
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                disabled={status !== 'ready'}
                            >
                                {codes.map((currency) => (
                                    <option key={currency} value={currency}>{currency}</option>
                                ))}
                            </select>
                            <p className='mt-1.5 truncate text-xs text-[#8FAE9F]'>{nameOf(from) || ' '}</p>
                        </div>

                        <button
                            type='button'
                            onClick={swap}
                            disabled={status !== 'ready'}
                            aria-label='Valyutalarni almashtirish'
                            className='mb-7 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#C8A24B]/40 text-[#C8A24B] transition-all hover:bg-[#C8A24B] hover:text-[#0A2620] disabled:cursor-wait disabled:opacity-50'
                        >
                            <TbArrowsExchange size={22} />
                        </button>

                        <div>
                            <label htmlFor='cv-to' className='cv-mono block text-[11px] uppercase tracking-[0.2em] text-[#8FAE9F]'>
                                Ga
                            </label>
                            <select
                                id='cv-to'
                                className='cv-select cv-mono mt-2 w-full cursor-pointer appearance-none rounded-lg border border-[#C8A24B]/25 bg-[#0A2620] px-3 py-2.5 text-lg text-[#EDE8D8] transition-colors hover:border-[#C8A24B]/60 focus:outline-none disabled:cursor-wait disabled:opacity-50'
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                disabled={status !== 'ready'}
                            >
                                {codes.map((currency) => (
                                    <option key={currency} value={currency}>{currency}</option>
                                ))}
                            </select>
                            <p className='mt-1.5 truncate text-xs text-[#8FAE9F]'>{nameOf(to) || ' '}</p>
                        </div>
                    </div>

                    <div className='mt-7 border-t border-[#C8A24B]/20 pt-6'>
                        {status === 'loading' && (
                            <p className='cv-mono text-sm text-[#8FAE9F]'>Kurslar yuklanmoqda…</p>
                        )}
                        {status === 'error' && (
                            <p className='text-sm text-[#E0A090]'>
                                Kurslarni yuklab bo‘lmadi. Internet aloqasini tekshirib, sahifani yangilang.
                            </p>
                        )}
                        {status === 'ready' && (
                            <>
                                <p className='cv-mono text-sm text-[#8FAE9F]'>
                                    {isNaN(amt) ? '0' : fmt.format(amt)} {from} =
                                </p>
                                <p className='cv-mono mt-1 break-all text-3xl text-[#C8A24B] sm:text-4xl'>
                                    {result !== null ? fmt.format(result) : '0,00'}
                                    <span className='ml-2 text-xl text-[#EDE8D8] sm:text-2xl'>{to}</span>
                                </p>
                                {rate !== null && (
                                    <p className='cv-mono mt-3 text-xs text-[#8FAE9F]'>
                                        1 {from} = {fmtRate.format(rate)} {to}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </section>

                <p className='cv-mono mt-6 text-center text-[11px] text-[#8FAE9F]/70'>
                    Manba: exchangerate-api.com · Kurslar ma'lumot uchun
                </p>
            </main>
        </div>
    )
}

export default Converter
