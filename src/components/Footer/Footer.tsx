import styles from './Footer.module.css'

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<a href="https://fb.com/blackwolves">John Paul L. Gabule</a>
			<br />
			{currentYear}
		</footer>
	)
}
