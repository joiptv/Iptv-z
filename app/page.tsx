import { promises as fs } from 'fs'
import path from 'path'
import styles from './page.module.css'

interface Channel {
  logo: string
  name: string
  link: string
  drmScheme?: string
  drmLicense?: string
  cookie?: string
}

async function getChannels(): Promise<Channel[]> {
  try {
    const filePath = path.join(process.cwd(), 'Jio.m3u8')
    const fileContents = await fs.readFile(filePath, 'utf8')
    const channels = JSON.parse(fileContents)
    return Array.isArray(channels) ? channels : []
  } catch (error) {
    console.error('Error reading channels:', error)
    return []
  }
}

export default async function Home() {
  const channels = await getChannels()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>IPTV-Z Channel Viewer</h1>
          <p className={styles.subtitle}>
            Browse available IPTV channels • Powered by Vercel Speed Insights
          </p>
        </header>

        <div className={styles.grid}>
          {channels.map((channel, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.logoContainer}>
                {channel.logo ? (
                  <img 
                    src={channel.logo} 
                    alt={channel.name || 'Channel'}
                    className={styles.logo}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.logoPlaceholder}>
                    {channel.name ? channel.name.charAt(0) : 'C'}
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.channelName}>{channel.name || 'Unknown Channel'}</h3>
                {channel.drmScheme && (
                  <span className={styles.badge}>{channel.drmScheme}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {channels.length === 0 && (
          <div className={styles.empty}>
            <p>No channels available</p>
          </div>
        )}
      </div>
    </main>
  )
}
