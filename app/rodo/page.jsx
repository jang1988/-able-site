// app/polityka-prywatnosci/page.jsx
import styles from './page.module.css'

export const metadata = {
	title: 'Polityka prywatności | BIGBUD',
	description:
		'Polityka prywatności BIGBUD. Informacje o przetwarzaniu danych osobowych, plikach cookies, prawach użytkowników oraz zasadach ochrony prywatności.',
	keywords: [
		'polityka prywatności BIGBUD',
		'ochrona danych osobowych',
		'przetwarzanie danych osobowych',
		'cookies',
		'RODO',
		'prawa użytkownika',
		'ochrona prywatności'
	]
}

export default function PolitykaPrywatnosci() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Polityka Prywatności</h1>

				<div className={styles.section}>
					<p className={styles.text}>
						Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych oraz zasady
						wykorzystywania plików cookies i podobnych technologii w związku z korzystaniem z
						serwisu internetowego dostępnego pod adresem{' '}
						<a
							href="https://bigbudcom.net/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							https://bigbudcom.net/
						</a>{' '}
						(dalej: „Serwis”).
					</p>
					<p className={styles.text}>
						Dbamy o ochronę prywatności osób korzystających z Serwisu i przetwarzamy dane osobowe
						zgodnie z obowiązującymi przepisami prawa, w szczególności z:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
							r. („RODO”);
						</li>
						<li className={styles.listItem}>
							ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych;
						</li>
						<li className={styles.listItem}>
							ustawą z dnia 12 lipca 2024 r. – Prawo komunikacji elektronicznej;
						</li>
						<li className={styles.listItem}>
							innymi obowiązującymi przepisami dotyczącymi ochrony danych osobowych, prywatności i
							świadczenia usług drogą elektroniczną.
						</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>I. Administrator danych osobowych</h2>
					<p className={styles.text}>
						1. Administratorem danych osobowych przetwarzanych w związku z korzystaniem z Serwisu
						jest:
					</p>
					<p className={styles.text}>
						BIGBUD spółka z ograniczoną odpowiedzialnością
						<br />
						ul. Piękna 7
						<br />
						32-005 Niepołomice
						<br />
						KRS: 0001117272
						<br />
						NIP: 6793304642
						<br />
						REGON: 529195238
						<br />
						kapitał zakładowy: 100.000 zł, w całości opłacony
						<br />
						dalej: „Administrator” lub „BIGBUD”.
					</p>
					<p className={styles.text}>
						2. Kontakt z Administratorem w sprawach dotyczących ochrony danych osobowych możliwy
						jest:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							e-mailowo: <strong>biuro@bigbudcom.net</strong>
						</li>
						<li className={styles.listItem}>korespondencyjnie na adres siedziby Administratora.</li>
					</ul>
					<p className={styles.text}>
						3. Administrator nie wyznaczył Inspektora Ochrony Danych, chyba że obowiązek jego
						wyznaczenia wynikać będzie z przepisów prawa.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>II. Zakres i cele przetwarzania danych</h2>
					<p className={styles.text}>
						1. Administrator przetwarza dane osobowe w zakresie niezbędnym do prawidłowego
						funkcjonowania Serwisu oraz realizacji celów wskazanych w niniejszej Polityce
						Prywatności.
					</p>
					<p className={styles.text}>
						2. Dane osobowe mogą być przetwarzane w szczególności w celu:
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>
							udzielania odpowiedzi na wiadomości przesłane za pośrednictwem formularzy
							kontaktowych;
						</li>
						<li className={styles.listItem}>
							prowadzenia korespondencji e-mailowej lub telefonicznej z osobami kontaktującymi się z
							Administratorem;
						</li>
						<li className={styles.listItem}>przygotowania i przedstawiania ofert handlowych;</li>
						<li className={styles.listItem}>
							realizacji zamówień, umów i innych uzgodnień zawieranych z klientami i kontrahentami;
						</li>
						<li className={styles.listItem}>prowadzenia działań związanych z obsługą klienta;</li>
						<li className={styles.listItem}>
							rozpatrywania reklamacji, skarg, wniosków oraz dochodzenia lub obrony przed
							roszczeniami;
						</li>
						<li className={styles.listItem}>
							wypełnienia obowiązków prawnych ciążących na Administratorze, w szczególności
							obowiązków podatkowych, rachunkowych i archiwizacyjnych;
						</li>
						<li className={styles.listItem}>
							zapewnienia bezpieczeństwa Serwisu, jego użytkowników oraz infrastruktury
							informatycznej;
						</li>
						<li className={styles.listItem}>
							prowadzenia analiz statystycznych i analitycznych dotyczących korzystania z Serwisu;
						</li>
						<li className={styles.listItem}>
							prowadzenia działań marketingowych, jeżeli istnieje odpowiednia podstawa prawna do ich
							prowadzenia;
						</li>
						<li className={styles.listItem}>ustalenia, dochodzenia lub obrony roszczeń;</li>
						<li className={styles.listItem}>
							realizacji innych prawnie uzasadnionych interesów Administratora, o ile nie naruszają
							one praw i wolności osób, których dane dotyczą.
						</li>
					</ol>
					<p className={styles.text}>
						3. Administrator nie będzie przetwarzał danych osobowych w sposób niezgodny z celami,
						dla których zostały zebrane, chyba że dalsze przetwarzanie będzie dopuszczalne na
						podstawie obowiązujących przepisów prawa.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>III. Podstawy prawne przetwarzania danych</h2>
					<p className={styles.text}>
						1. Dane osobowe mogą być przetwarzane przez Administratora na podstawie:
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>
							art. 6 ust. 1 lit. a RODO – jeżeli osoba, której dane dotyczą, wyraziła zgodę na
							przetwarzanie danych w określonym celu;
						</li>
						<li className={styles.listItem}>
							art. 6 ust. 1 lit. b RODO – jeżeli przetwarzanie jest niezbędne do wykonania umowy lub
							do podjęcia działań na żądanie osoby przed zawarciem umowy;
						</li>
						<li className={styles.listItem}>
							art. 6 ust. 1 lit. c RODO – jeżeli przetwarzanie jest niezbędne do wypełnienia
							obowiązku prawnego ciążącego na Administratorze;
						</li>
						<li className={styles.listItem}>
							art. 6 ust. 1 lit. f RODO – jeżeli przetwarzanie jest niezbędne do realizacji prawnie
							uzasadnionego interesu Administratora lub osoby trzeciej, z zastrzeżeniem praw i
							wolności osoby, której dane dotyczą.
						</li>
					</ol>
					<p className={styles.text}>
						2. W przypadku przetwarzania danych na podstawie zgody osoba, której dane dotyczą, ma
						prawo wycofać zgodę w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem
						przetwarzania dokonanego przed jej wycofaniem.
					</p>
					<p className={styles.text}>
						3. Jeżeli dane są przetwarzane na podstawie prawnie uzasadnionego interesu
						Administratora, osoba, której dane dotyczą, może – w przypadkach określonych w RODO –
						wnieść sprzeciw wobec takiego przetwarzania.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>
						IV. Dane przekazywane za pośrednictwem formularzy kontaktowych
					</h2>
					<p className={styles.text}>
						1. Serwis może umożliwiać użytkownikom kontakt z Administratorem za pośrednictwem
						formularzy elektronicznych.
					</p>
					<p className={styles.text}>
						2. W zależności od rodzaju formularza użytkownik może zostać poproszony o podanie w
						szczególności:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>imienia i nazwiska;</li>
						<li className={styles.listItem}>adresu e-mail;</li>
						<li className={styles.listItem}>numeru telefonu;</li>
						<li className={styles.listItem}>nazwy firmy;</li>
						<li className={styles.listItem}>treści wiadomości;</li>
						<li className={styles.listItem}>innych danych niezbędnych do obsługi zapytania.</li>
					</ul>
					<p className={styles.text}>
						3. Podanie danych oznaczonych jako wymagane jest niezbędne do prawidłowego obsłużenia
						zgłoszenia.
					</p>
					<p className={styles.text}>
						4. Dane przekazane za pośrednictwem formularza są wykorzystywane przede wszystkim w celu
						udzielenia odpowiedzi na zapytanie oraz podjęcia działań związanych z jego obsługą.
					</p>
					<p className={styles.text}>
						5. Jeżeli kontakt prowadzi do zawarcia umowy lub realizacji zamówienia, dane mogą być
						następnie przetwarzane w celu wykonania tej umowy oraz realizacji obowiązków prawnych
						Administratora.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>V. Dane zbierane automatycznie – logi serwera</h2>
					<p className={styles.text}>
						1. Podczas korzystania z Serwisu mogą być automatycznie zapisywane informacje techniczne
						związane z korzystaniem z Serwisu, w szczególności:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>adres IP urządzenia;</li>
						<li className={styles.listItem}>rodzaj i wersja przeglądarki internetowej;</li>
						<li className={styles.listItem}>system operacyjny;</li>
						<li className={styles.listItem}>rodzaj urządzenia;</li>
						<li className={styles.listItem}>data i godzina wizyty;</li>
						<li className={styles.listItem}>informacje dotyczące sposobu korzystania z Serwisu;</li>
						<li className={styles.listItem}>informacje dotyczące błędów i zdarzeń technicznych.</li>
					</ul>
					<p className={styles.text}>2. Dane te mogą być przetwarzane przede wszystkim w celu:</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>zapewnienia prawidłowego działania Serwisu;</li>
						<li className={styles.listItem}>zapewnienia bezpieczeństwa Serwisu;</li>
						<li className={styles.listItem}>wykrywania i zapobiegania nadużyciom;</li>
						<li className={styles.listItem}>prowadzenia analiz technicznych i statystycznych;</li>
						<li className={styles.listItem}>administrowania infrastrukturą informatyczną.</li>
					</ul>
					<p className={styles.text}>
						3. Podstawą prawną przetwarzania danych technicznych może być art. 6 ust. 1 lit. f RODO,
						tj. prawnie uzasadniony interes Administratora polegający na zapewnieniu bezpieczeństwa
						i prawidłowego funkcjonowania Serwisu.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VI. Analityka internetowa</h2>
					<p className={styles.text}>
						1. Serwis może korzystać z narzędzi analitycznych służących do analizy sposobu
						korzystania z Serwisu, w szczególności Google Analytics.
					</p>
					<p className={styles.text}>
						2. Narzędzia analityczne mogą umożliwiać Administratorowi uzyskanie informacji
						dotyczących m.in.:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>liczby użytkowników Serwisu;</li>
						<li className={styles.listItem}>źródeł wejść na stronę;</li>
						<li className={styles.listItem}>odwiedzanych podstron;</li>
						<li className={styles.listItem}>czasu korzystania z Serwisu;</li>
						<li className={styles.listItem}>
							sposobu korzystania z poszczególnych funkcjonalności Serwisu;
						</li>
						<li className={styles.listItem}>parametrów technicznych urządzeń i przeglądarek.</li>
					</ul>
					<p className={styles.text}>
						3. Jeżeli korzystanie z danego narzędzia analitycznego wymaga zgody użytkownika na
						podstawie obowiązujących przepisów, narzędzie to będzie uruchamiane po uzyskaniu
						wymaganej zgody.
					</p>
					<p className={styles.text}>
						4. Szczegółowe informacje dotyczące sposobu przetwarzania danych przez dostawców
						zewnętrznych dostępne są w ich aktualnych politykach prywatności.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VII. Pliki cookies</h2>

					<p className={styles.subpoint}>
						<strong>1. Informacje ogólne</strong>
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>
							Serwis wykorzystuje pliki cookies oraz podobne technologie.
						</li>
						<li className={styles.listItem}>
							Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym
							użytkownika lub informacje uzyskiwane z urządzenia użytkownika, które umożliwiają
							prawidłowe działanie Serwisu oraz – w zależności od rodzaju – realizację dodatkowych
							funkcji.
						</li>
						<li className={styles.listItem}>
							Pliki cookies mogą być wykorzystywane w szczególności w celu:
						</li>
					</ol>
					<ul className={styles.list}>
						<li className={styles.listItem}>zapewnienia prawidłowego działania Serwisu;</li>
						<li className={styles.listItem}>utrzymania sesji użytkownika;</li>
						<li className={styles.listItem}>zapamiętywania wybranych ustawień;</li>
						<li className={styles.listItem}>zapewnienia bezpieczeństwa;</li>
						<li className={styles.listItem}>prowadzenia statystyk;</li>
						<li className={styles.listItem}>analizy sposobu korzystania z Serwisu;</li>
						<li className={styles.listItem}>
							realizacji funkcji marketingowych, jeżeli są wykorzystywane i użytkownik wyraził
							wymaganą zgodę.
						</li>
					</ul>

					<p className={styles.subpoint}>
						<strong>2. Rodzaje cookies</strong>
					</p>
					<p className={styles.text}>W Serwisie mogą być stosowane:</p>
					<p className={styles.subpoint}>
						<strong>a) Cookies niezbędne</strong>
					</p>
					<p className={styles.text}>
						Cookies niezbędne są wykorzystywane do zapewnienia prawidłowego działania Serwisu oraz
						jego podstawowych funkcjonalności. Ich wykorzystanie może być niezbędne do świadczenia
						usług żądanych przez użytkownika lub zapewnienia funkcjonowania Serwisu.
					</p>
					<p className={styles.subpoint}>
						<strong>b) Cookies analityczne</strong>
					</p>
					<p className={styles.text}>
						Cookies analityczne umożliwiają analizę sposobu korzystania z Serwisu i tworzenie
						statystyk. Są one wykorzystywane zgodnie z ustawieniami wyrażonymi przez użytkownika,
						jeżeli ich zastosowanie wymaga uzyskania zgody.
					</p>
					<p className={styles.subpoint}>
						<strong>c) Cookies marketingowe</strong>
					</p>
					<p className={styles.text}>
						Jeżeli w Serwisie wykorzystywane są technologie marketingowe, mogą one służyć do
						dostosowania treści marketingowych do zainteresowań użytkownika lub mierzenia
						skuteczności działań marketingowych. Takie technologie będą stosowane zgodnie z
						obowiązującymi przepisami oraz – jeżeli jest to wymagane – po uzyskaniu zgody
						użytkownika.
					</p>

					<p className={styles.subpoint}>
						<strong>3. Zgoda na cookies</strong>
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>
							W przypadku cookies lub podobnych technologii, których wykorzystanie wymaga zgody
							użytkownika, zgoda jest uzyskiwana przed ich zastosowaniem.
						</li>
						<li className={styles.listItem}>
							Użytkownik powinien mieć możliwość dokonania wyboru dotyczącego poszczególnych
							kategorii cookies.
						</li>
						<li className={styles.listItem}>
							Zgoda na stosowanie cookies powinna być dobrowolna, konkretna, świadoma i
							jednoznaczna.
						</li>
						<li className={styles.listItem}>
							Użytkownik może w dowolnym momencie zmienić swoje ustawienia dotyczące cookies lub
							wycofać wcześniej udzieloną zgodę.
						</li>
						<li className={styles.listItem}>
							Wycofanie zgody powinno być możliwe w sposób równie łatwy jak jej udzielenie.
						</li>
						<li className={styles.listItem}>
							Ustawienia dotyczące cookies mogą być również zmieniane za pomocą ustawień
							przeglądarki internetowej.
						</li>
					</ol>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VIII. Odbiorcy danych osobowych</h2>
					<p className={styles.text}>
						1. Dane osobowe mogą być przekazywane podmiotom uprawnionym do ich otrzymania na
						podstawie przepisów prawa.
					</p>
					<p className={styles.text}>
						2. W zakresie niezbędnym do realizacji celów wskazanych w niniejszej Polityce
						Prywatności dane mogą być również powierzane podmiotom świadczącym usługi na rzecz
						Administratora, w szczególności:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>podmiotom świadczącym usługi księgowe i rachunkowe;</li>
						<li className={styles.listItem}>dostawcom usług informatycznych;</li>
						<li className={styles.listItem}>dostawcom hostingu i infrastruktury serwerowej;</li>
						<li className={styles.listItem}>dostawcom poczty elektronicznej;</li>
						<li className={styles.listItem}>dostawcom narzędzi analitycznych;</li>
						<li className={styles.listItem}>dostawcom usług marketingowych;</li>
						<li className={styles.listItem}>dostawcom systemów CRM;</li>
						<li className={styles.listItem}>firmom kurierskim i pocztowym;</li>
						<li className={styles.listItem}>dostawcom usług związanych z obsługą płatności;</li>
						<li className={styles.listItem}>
							podmiotom świadczącym usługi prawne, doradcze lub audytowe.
						</li>
					</ul>
					<p className={styles.text}>
						3. Podmioty, którym Administrator powierza przetwarzanie danych osobowych, przetwarzają
						je zgodnie z poleceniami Administratora i na podstawie odpowiednich umów lub innych
						instrumentów prawnych wymaganych przez przepisy prawa.
					</p>
					<p className={styles.text}>
						4. Administrator może przekazywać dane osobowe organom publicznym lub innym podmiotom
						uprawnionym na podstawie obowiązujących przepisów prawa.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>
						IX. Przekazywanie danych poza Europejski Obszar Gospodarczy
					</h2>
					<p className={styles.text}>
						1. W związku z korzystaniem z usług zewnętrznych dostawców niektóre dane osobowe mogą
						być przekazywane poza Europejski Obszar Gospodarczy.
					</p>
					<p className={styles.text}>
						2. Jeżeli takie przekazanie nastąpi, Administrator zapewni, aby odbywało się ono zgodnie
						z wymaganiami RODO, w szczególności na podstawie:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony;
						</li>
						<li className={styles.listItem}>
							odpowiednich zabezpieczeń przewidzianych w art. 46 RODO;
						</li>
						<li className={styles.listItem}>innych podstaw prawnych przewidzianych w RODO.</li>
					</ul>
					<p className={styles.text}>
						3. W zakresie, w jakim jest to wymagane przez przepisy prawa, użytkownik może uzyskać
						informacje dotyczące zastosowanych zabezpieczeń.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>X. Okres przechowywania danych</h2>
					<p className={styles.text}>
						1. Dane osobowe będą przechowywane przez okres nie dłuższy niż jest to niezbędne do
						realizacji celu, dla którego zostały zebrane.
					</p>
					<p className={styles.text}>
						2. Okres przechowywania danych może zależeć w szczególności od:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>rodzaju relacji z Administratorem;</li>
						<li className={styles.listItem}>celu przetwarzania;</li>
						<li className={styles.listItem}>obowiązków prawnych ciążących na Administratorze;</li>
						<li className={styles.listItem}>okresu przedawnienia potencjalnych roszczeń;</li>
						<li className={styles.listItem}>
							czasu niezbędnego do ustalenia, dochodzenia lub obrony przed roszczeniami.
						</li>
					</ul>
					<p className={styles.text}>
						3. Dane przetwarzane w związku z realizacją umowy będą przechowywane przez okres
						niezbędny do jej wykonania, a następnie przez okres wymagany przepisami prawa lub
						niezbędny do zabezpieczenia ewentualnych roszczeń.
					</p>
					<p className={styles.text}>
						4. Dane przetwarzane na podstawie zgody będą przechowywane do czasu jej wycofania, chyba
						że dalsze przetwarzanie jest możliwe lub wymagane na innej podstawie prawnej.
					</p>
					<p className={styles.text}>
						5. Dane przetwarzane w celach marketingowych będą przechowywane do czasu wniesienia
						skutecznego sprzeciwu wobec ich przetwarzania lub wycofania zgody, jeżeli przetwarzanie
						odbywa się na podstawie zgody.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XI. Prawa osób, których dane dotyczą</h2>
					<p className={styles.text}>
						Osobie, której dane osobowe są przetwarzane przez Administratora, przysługuje – w
						przypadkach i na zasadach określonych w RODO – prawo do:
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>dostępu do swoich danych osobowych;</li>
						<li className={styles.listItem}>
							uzyskania informacji dotyczących przetwarzania danych;
						</li>
						<li className={styles.listItem}>
							sprostowania nieprawidłowych lub uzupełnienia niekompletnych danych;
						</li>
						<li className={styles.listItem}>
							usunięcia danych osobowych („prawo do bycia zapomnianym”), jeżeli zachodzą przesłanki
							określone w RODO;
						</li>
						<li className={styles.listItem}>ograniczenia przetwarzania danych;</li>
						<li className={styles.listItem}>
							przenoszenia danych osobowych, jeżeli przetwarzanie odbywa się na podstawie zgody lub
							umowy i jest prowadzone w sposób zautomatyzowany;
						</li>
						<li className={styles.listItem}>
							wniesienia sprzeciwu wobec przetwarzania danych – w przypadkach określonych w RODO;
						</li>
						<li className={styles.listItem}>
							wycofania zgody na przetwarzanie danych w dowolnym momencie, jeżeli przetwarzanie
							odbywa się na podstawie zgody;
						</li>
						<li className={styles.listItem}>
							wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
						</li>
					</ol>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XII. Prawo do sprzeciwu</h2>
					<p className={styles.text}>
						1. Jeżeli dane osobowe są przetwarzane na podstawie art. 6 ust. 1 lit. f RODO, osoba,
						której dane dotyczą, może – z przyczyn związanych z jej szczególną sytuacją – wnieść
						sprzeciw wobec takiego przetwarzania.
					</p>
					<p className={styles.text}>
						2. Jeżeli dane osobowe są przetwarzane na potrzeby marketingu bezpośredniego, osoba,
						której dane dotyczą, może w dowolnym momencie wnieść sprzeciw wobec takiego
						przetwarzania.
					</p>
					<p className={styles.text}>
						3. W przypadku wniesienia sprzeciwu wobec przetwarzania danych na potrzeby marketingu
						bezpośredniego dane nie będą dalej przetwarzane w tym celu.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>
						XIII. Profilowanie i zautomatyzowane podejmowanie decyzji
					</h2>
					<p className={styles.text}>
						1. Administrator może korzystać z narzędzi analitycznych lub marketingowych
						umożliwiających analizę sposobu korzystania z Serwisu.
					</p>
					<p className={styles.text}>
						2. Jeżeli w związku z korzystaniem z Serwisu będzie dochodziło do profilowania w
						rozumieniu art. 4 pkt 4 RODO, informacje dotyczące tego procesu zostaną przekazane
						użytkownikowi w zakresie wymaganym przez przepisy prawa.
					</p>
					<p className={styles.text}>
						3. Administrator nie podejmuje wobec użytkowników decyzji wywołujących wobec nich skutki
						prawne lub w podobny sposób istotnie na nich wpływających wyłącznie w sposób
						zautomatyzowany, chyba że takie działanie będzie prawnie dopuszczalne i zostaną
						spełnione wymagania określone w RODO.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XIV. Bezpieczeństwo danych</h2>
					<p className={styles.text}>
						1. Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu
						ochronę danych osobowych przed:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>nieuprawnionym dostępem;</li>
						<li className={styles.listItem}>utratą;</li>
						<li className={styles.listItem}>zniszczeniem;</li>
						<li className={styles.listItem}>przypadkowym lub niezgodnym z prawem ujawnieniem;</li>
						<li className={styles.listItem}>zmianą;</li>
						<li className={styles.listItem}>innymi formami niezgodnego z prawem przetwarzania.</li>
					</ul>
					<p className={styles.text}>2. Do środków bezpieczeństwa mogą należeć w szczególności:</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							ograniczenie dostępu do danych wyłącznie do osób upoważnionych;
						</li>
						<li className={styles.listItem}>stosowanie zabezpieczeń informatycznych;</li>
						<li className={styles.listItem}>
							stosowanie zabezpieczeń serwerów i systemów informatycznych;
						</li>
						<li className={styles.listItem}>wykonywanie kopii zapasowych;</li>
						<li className={styles.listItem}>stosowanie certyfikatu SSL/TLS;</li>
						<li className={styles.listItem}>okresowe aktualizowanie oprogramowania i systemów;</li>
						<li className={styles.listItem}>
							stosowanie procedur związanych z ochroną danych osobowych.
						</li>
					</ul>
					<p className={styles.text}>
						3. Administrator dokonuje okresowej oceny stosowanych środków bezpieczeństwa oraz
						dostosowuje je do poziomu ryzyka.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XV. Linki do innych stron internetowych</h2>
					<p className={styles.text}>
						1. Serwis może zawierać odnośniki do innych stron internetowych lub usług zewnętrznych.
					</p>
					<p className={styles.text}>
						2. Administrator nie odpowiada za zasady przetwarzania danych osobowych stosowane przez
						podmioty prowadzące te strony lub usługi.
					</p>
					<p className={styles.text}>
						3. Po przejściu na stronę zewnętrzną użytkownik powinien zapoznać się z obowiązującą na
						niej polityką prywatności oraz zasadami wykorzystywania cookies.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XVI. Opinie klientów</h2>
					<p className={styles.text}>
						1. W Serwisie mogą być prezentowane opinie klientów dotyczące działalności BIGBUD.
					</p>
					<p className={styles.text}>
						2. Opinie mogą pochodzić między innymi z publicznie dostępnych profili firmy
						prowadzonych w zewnętrznych serwisach, w tym w usługach Google.
					</p>
					<p className={styles.text}>
						3. W przypadku publikowania opinii zawierających dane osobowe Administrator może
						przetwarzać takie dane w zakresie niezbędnym do prezentacji opinii, z uwzględnieniem
						obowiązujących przepisów prawa.
					</p>
					<p className={styles.text}>
						4. Jeżeli osoba, której dane dotyczą, chce uzyskać informacje dotyczące przetwarzania
						jej danych w związku z publikacją opinii albo zgłosić sprzeciw lub żądanie usunięcia
						opinii, może skontaktować się z Administratorem.
					</p>
					<p className={styles.text}>
						5. Administrator może moderować lub usuwać opinie, w szczególności jeżeli naruszają
						obowiązujące przepisy prawa, dobra osobiste, zasady współżycia społecznego lub zasady
						korzystania z Serwisu.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XVII. Prawa autorskie i odpowiedzialność za treści</h2>
					<p className={styles.text}>
						1. Treści zamieszczone w Serwisie, w szczególności teksty, zdjęcia, grafiki, materiały
						informacyjne i nagrania, mogą stanowić przedmiot praw autorskich Administratora lub
						innych uprawnionych podmiotów.
					</p>
					<p className={styles.text}>
						2. Bez uprzedniej zgody uprawnionego podmiotu zabronione jest kopiowanie,
						rozpowszechnianie, modyfikowanie lub wykorzystywanie materiałów zamieszczonych w
						Serwisie w zakresie wykraczającym poza dozwolony użytek określony przepisami prawa.
					</p>
					<p className={styles.text}>
						3. Informacje prezentowane w Serwisie mają charakter ogólny i nie stanowią porady
						prawnej, podatkowej, technicznej ani innej profesjonalnej porady dotyczącej
						indywidualnego przypadku.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XVIII. Zmiany w Polityce Prywatności</h2>
					<p className={styles.text}>
						1. Administrator może dokonywać zmian w niniejszej Polityce Prywatności w szczególności
						w przypadku:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>zmian obowiązujących przepisów prawa;</li>
						<li className={styles.listItem}>zmian funkcjonalności Serwisu;</li>
						<li className={styles.listItem}>wprowadzenia nowych usług lub narzędzi;</li>
						<li className={styles.listItem}>zmian sposobu przetwarzania danych osobowych;</li>
						<li className={styles.listItem}>zmian wykorzystywanych dostawców usług.</li>
					</ul>
					<p className={styles.text}>
						2. Aktualna wersja Polityki Prywatności jest publikowana w Serwisie.
					</p>
					<p className={styles.text}>
						3. Istotne zmiany mogą zostać dodatkowo zakomunikowane użytkownikom, jeżeli będzie to
						wymagane przez przepisy prawa.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XIX. Kontakt</h2>
					<p className={styles.text}>
						1. W sprawach dotyczących niniejszej Polityki Prywatności, przetwarzania danych
						osobowych oraz realizacji praw wynikających z RODO można skontaktować się z
						Administratorem:
					</p>
					<p className={styles.text}>
						BIGBUD sp. z o.o.
						<br />
						ul. Piękna 7
						<br />
						32-005 Niepołomice
						<br />
						e-mail: <strong>biuro@bigbudcom.net</strong>
					</p>
					<p className={styles.text}>
						2. Administrator udziela odpowiedzi na zgłoszenia dotyczące danych osobowych w terminach
						określonych przez obowiązujące przepisy prawa.
					</p>
					<p className={styles.text}>
						3. Jeżeli osoba, której dane dotyczą, uzna, że przetwarzanie jej danych osobowych
						narusza przepisy RODO, ma prawo wnieść skargę do:
					</p>
					<p className={styles.text}>
						Prezesa Urzędu Ochrony Danych Osobowych
						<br />
						ul. Stawki 2<br />
						00-193 Warszawa
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>XX. Postanowienia końcowe</h2>
					<p className={styles.text}>
						1. Niniejsza Polityka Prywatności obowiązuje od dnia jej opublikowania w Serwisie.
					</p>
					<p className={styles.text}>
						2. W sprawach nieuregulowanych w niniejszej Polityce Prywatności zastosowanie mają
						przepisy RODO, ustawy o ochronie danych osobowych, Prawa komunikacji elektronicznej oraz
						inne właściwe przepisy prawa polskiego i prawa Unii Europejskiej.
					</p>
				</div>
			</div>
		</div>
	)
}
