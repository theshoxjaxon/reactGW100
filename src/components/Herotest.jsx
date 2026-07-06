import React, { useMemo } from 'react'

const NODES = [
    { x: 250, y: 360, r: 26, avatar: 'https://randomuser.me/api/portraits/women/65.jpg', ar: 22 },
    { x: 950, y: 470, r: 30, avatar: 'https://randomuser.me/api/portraits/men/32.jpg', ar: 24 },
    { x: 1180, y: 380, r: 24, avatar: 'https://randomuser.me/api/portraits/men/85.jpg', ar: 20 },
    { x: 1450, y: 400, r: 15, avatar: 'https://randomuser.me/api/portraits/women/44.jpg', ar: 14 },
]

const ARCS = [
    'M 250 360 Q 620 80 950 470',
    'M 950 470 Q 1070 260 1180 380',
    'M 1180 380 Q 1320 290 1450 400',
]

const BitcoinSphere = () => {
    const dots = useMemo(() => {
        const arr = []
        while (arr.length < 850) {
            // uniform points on a sphere projected to 2D: dense at the rim, sparse in the middle
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            const radius = 215 + Math.random() * 45
            const dx = radius * Math.sin(phi) * Math.cos(theta)
            const dy = radius * Math.sin(phi) * Math.sin(theta)
            if (Math.hypot(dx, dy) < 110) continue // keep the middle clear for the coin
            arr.push({
                x: 280 + dx,
                y: 280 + dy,
                r: 0.6 + Math.random() * 1.4,
                o: 0.25 + Math.random() * 0.65,
            })
        }
        return arr
    }, [])

    return (
        <svg viewBox="0 0 560 560" className="w-full max-w-120" aria-hidden="true">
            <defs>
                <linearGradient id="btcGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8c93f2" />
                    <stop offset="1" stopColor="#5637c9" />
                </linearGradient>
            </defs>
            {dots.map((d, i) => (
                <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#7f8cf0" opacity={d.o} />
            ))}
            <text
                x="280"
                y="365"
                textAnchor="middle"
                fontSize="240"
                fontWeight="700"
                fill="url(#btcGrad)"
            >
                &#8383;
            </text>
        </svg>
    )
}

const Waves = () => {
    const lines = useMemo(() => {
        const hill = (x) =>
            45 * Math.sin(x / 300 + 1) + 35 * Math.sin(x / 150 + 3) + 20 * Math.sin(x / 75)
        const paths = []
        for (let i = 0; i < 42; i++) {
            const pts = []
            for (let x = 0; x <= 1600; x += 25) {
                const y = 300 + i * 4.5 + hill(x + i * 4) * (0.5 + i * 0.004)
                pts.push(`${x},${y.toFixed(1)}`)
            }
            paths.push(pts.join(' '))
        }
        return paths
    }, [])

    return (
        <svg
            viewBox="0 0 1600 540"
            preserveAspectRatio="xMidYMax slice"
            className="h-56 w-full lg:h-80"
            aria-hidden="true"
        >
            <defs>
                <radialGradient id="ball" cx="0.35" cy="0.3" r="0.75">
                    <stop offset="0" stopColor="#8d76ec" />
                    <stop offset="1" stopColor="#3c2492" />
                </radialGradient>
                {NODES.map((n, i) => (
                    <clipPath key={i} id={`avatarClip${i}`}>
                        <circle cx={n.x} cy={n.y - n.r - n.ar - 6} r={n.ar} />
                    </clipPath>
                ))}
            </defs>

            {lines.map((pts, i) => (
                <polyline
                    key={i}
                    points={pts}
                    fill="none"
                    stroke="#6b79e8"
                    strokeWidth="1"
                    opacity="0.33"
                />
            ))}

            {ARCS.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="#9aa4f5" strokeWidth="1.3" opacity="0.8" />
            ))}

            {NODES.map((n, i) => {
                const ay = n.y - n.r - n.ar - 6
                return (
                    <g key={i}>
                        <circle cx={n.x} cy={n.y} r={n.r} fill="url(#ball)" />
                        <circle
                            cx={n.x}
                            cy={ay}
                            r={n.ar + 2.5}
                            fill="#0d1033"
                            stroke="#b9a8f5"
                            strokeWidth="1.5"
                        />
                        <image
                            href={n.avatar}
                            x={n.x - n.ar}
                            y={ay - n.ar}
                            width={n.ar * 2}
                            height={n.ar * 2}
                            clipPath={`url(#avatarClip${i})`}
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </g>
                )
            })}
        </svg>
    )
}

const Herotest = () => {
    return (
        <section className="relative h-[calc(100vh-140px)] min-h-160 overflow-hidden bg-linear-to-b from-[#191d55] via-[#10143f] to-[#0b0e30]">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pt-12 lg:flex-row lg:justify-between lg:gap-6 lg:px-10 lg:pt-16">
                <div className="max-w-xl">
                    <p className="mb-5 font-light tracking-wide text-indigo-100/80">
                        The future of crypto-trading
                    </p>
                    <h1 className="text-5xl font-semibold leading-[1.15] text-white lg:text-6xl">
                        The{' '}
                        <span className="bg-linear-to-r from-[#5b6ae8] via-[#7a6cf0] to-[#9a82ff] bg-clip-text font-bold tracking-wider text-transparent">
                            next&nbsp; gen
                        </span>
                        <br />
                        crypto trading, the
                        <br />
                        fibre of traders
                    </h1>
                    <p className="mt-8 text-lg font-light leading-relaxed text-indigo-100/90">
                        Enjoy better rates when you trade your
                        <br />
                        bitcoin with{' '}
                        <span className="font-bold lowercase tracking-widest text-[#8b74ec]">
                            waves
                        </span>
                    </p>
                </div>

                <BitcoinSphere />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0">
                <Waves />
            </div>
        </section>
    )
}

export default Herotest
