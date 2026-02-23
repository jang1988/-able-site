// app/polityka-prywatnosci/page.jsx
import styles from './page.module.css';

export const metadata = {
	title: 'Polityka Prywatności | BIGBUD',
	description:
		'Polityka prywatności serwisu BIGBUD. Zasady przetwarzania danych osobowych, pliki cookies i ochrona prywatności użytkowników.',
};

export default function PolitykaPrywatnosci() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1 className={styles.title}>Polityka Prywatności</h1>

				<div className={styles.section}>
					<p className={styles.text}>
						Korzystając z naszej strony masz zapewnioną ochronę prywatności na poziomie odpowiadającym standardom określonym w przepisach powszechnie obowiązującego prawa, w tym szczególności w:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>Rozporządzeniu Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej: RODO);</li>
						<li className={styles.listItem}>Ustawie z dnia 29 sierpnia 1997 r. o ochronie danych osobowych (Dz.U. 2016 poz. 922 z późn. zm.);</li>
						<li className={styles.listItem}>Ustawie z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2020 poz. 344 z późn. zm.);</li>
						<li className={styles.listItem}>Ustawie z dnia 16 lipca 2004 r. – Prawo telekomunikacyjne (Dz.U. 2022 poz. 1648 z późn. zm.).</li>
					</ul>
					<p className={styles.text}>
						Twoje dane będą przetwarzane w okresie wynikającym z przepisów prawa, a także w czasie, w którym można wnieść pozew lub reklamację. Dane, które przetwarzamy na potrzeby marketingu bezpośredniego oferowanych przez nas usług, będziemy przetwarzać do momentu, w którym nie zgłosisz swojego sprzeciwu w tym zakresie.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>I. Informacje ogólne</h2>
					<p className={styles.text}>
						1. Niniejsza Polityka Prywatności reguluje zasady przetwarzania danych osobowych oraz zbierania i wykorzystywania informacji o Użytkownikach w serwisie internetowym dostępnym pod adresem https://bigbudcom.net (dalej: Serwis).
					</p>
					<p className={styles.text}>
						2. Polityka Prywatności została stworzona oraz przyjęta przez spółkę BIGBUD sp. z o.o.
					</p>
					<p className={styles.text}>
						3. BIGBUD spółka z ograniczoną odpowiedzialnością z siedzibą w Krakowie, ul. Rybitwy 22/318, 30-722 Kraków wpisana do krajowego rejestru sądowego pod nr KRS: 0001117272, NIP:6793304642, REGON: 529195238, kapitał zakładowy: 100.000 zł w całości opłacony, jest administratorem danych osobowych gromadzonych i przetwarzanych zgodnie z niniejszymi zasadami (dalej „BIGBUD” lub „Administrator”).
					</p>
					<p className={styles.text}>
						4. Administrator przetwarza dane osobowe Użytkowników Serwisu w celu:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>realizacji ciążących na podmiocie obowiązków wynikających z przepisów prawa;</li>
						<li className={styles.listItem}>realizacji zleceń oraz zamówień wykonywanych przez podmiot;</li>
						<li className={styles.listItem}>gromadzenia danych analitycznych i statystycznych;</li>
						<li className={styles.listItem}>obsługi reklamacji oraz ewentualnych innych roszczeń;</li>
						<li className={styles.listItem}>obsługi wiadomości kierowanych poprzez formularze elektroniczne dostępne w Serwisie, w formie wiadomości e-mail lub telefonicznie;</li>
						<li className={styles.listItem}>kierowania do Użytkowników treści marketingowych (komunikacja marketingowa dostarczana jest w oparciu o pliki cookies, dane analityczne i marketing bezpośredni).</li>
					</ul>
					<p className={styles.text}>
						5. W Serwisie mogą znajdować się odnośniki umożliwiające – w przypadku ich kliknięcia – otwarcie innych stron internetowych, które są zarządzane przez innych administratorów. Nie mamy wpływu na stosowaną przez te podmioty politykę prywatności oraz politykę wykorzystywania plików cookies, nie ponosimy za nie odpowiedzialności i zachęcamy Użytkowników naszego Serwisu do zapoznawanie się z tymi dokumentami na kolejnych stronach.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>II. Informacje o przetwarzaniu danych osobowych</h2>
					<p className={styles.text}>
						1. Nasz Serwis gromadzi następujące rodzaje danych.
					</p>
					
					<p className={styles.subpoint}>
						<strong>1) Dane przekazywane przez Użytkowników z wykorzystaniem formularzy elektronicznych znajdujących się w Serwisie.</strong>
					</p>
					<p className={styles.text}>
						Użytkownik, który chce przesłać do nas wiadomość za pośrednictwem jednego z formularzy elektronicznych dostępnych w Serwisie, powinien uzupełnić dostępne w nim pola, w których należy wpisać m.in. imię, adres e-mail i telefon do kontaktu, a także odpowiedzieć na uzupełniające pytania tematyczne.
					</p>
					<p className={styles.text}>
						Przesyłając formularz Użytkownik wyraża zgodę na kontakt mailowy oraz telefoniczny w celu obsługi jego zgłoszenia.
					</p>
					<p className={styles.text}>
						Wypełnienie formularza nie wymaga dodatkowej rejestracji lub logowania.
					</p>
					
					<p className={styles.subpoint}>
						<strong>2) Dane stanowiące informacje, które są automatycznie zapisywane po wejściu Użytkownika na stronę (tzw. logi serwera).</strong>
					</p>
					<p className={styles.text}>
						Przede wszystkim są to anonimowe informacje dotyczące adresu IP Użytkownika, używanej przez niego przeglądarki internetowej, jej języka oraz urządzenia, z którego Użytkownik połączył się z naszym Serwisem wraz z jego systemem operacyjnym, a także czas jego wizyty i wygenerowana liczba odsłon.
					</p>
					<p className={styles.text}>
						Gromadzone w ten sposób dane są analizowane w celu statystycznym z wykorzystaniem Google Analytics. Narzędzie to działa w oparciu o tzw. pliki cookies.
					</p>
					<p className={styles.text}>
						Co ważne, zebrane informacje nie są udostępniane w sposób umożliwiający identyfikację Użytkownika Serwisu i nie są przez nas ujawniane osobom nieupoważnionym do administrowania Serwisem.
					</p>
					<p className={styles.text}>
						Twoje dane przechowywane są wyłącznie w celu pomocniczym dla administrowania naszą stroną. Ich analiza daje nam możliwość optymalizacji jej treści oraz wdrażania rozwiązań, których oczekują od nas Użytkownicy.
					</p>
					<p className={styles.text}>
						Jeśli chcesz, to z polityką prywatności Google, możesz zapoznać się wchodząc na stronę: <a href="https://policies.google.com/privacy?hl=pl" target="_blank" rel="noopener noreferrer" className={styles.link}>https://policies.google.com/privacy?hl=pl</a>.
					</p>
					
					<p className={styles.text}>
						2. Użytkownikowi, którego dane są przetwarzane, przysługuje prawo:
					</p>
					<ol className={styles.orderedList}>
						<li className={styles.listItem}>dostępu do treści jego danych osobowych, żądania ich sprostowania lub usunięcia, na zasadach określonych w art. 15-17 RODO;</li>
						<li className={styles.listItem}>ograniczenia przetwarzania danych, w przypadkach określonych w art. 18 RODO;</li>
						<li className={styles.listItem}>przenoszenia danych, na zasadach określonych w art. 20 RODO, tj. do otrzymania od Administratora danych, które go dotyczą, w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego;</li>
						<li className={styles.listItem}>cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;</li>
						<li className={styles.listItem}>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych na adres Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
					</ol>
					
					<p className={styles.text}>
						3. W celu skorzystania z praw, o których mowa w pkt. 2 ppkt. 1-4, należy skontaktować się z Administratorem Serwisu korzystając z danych kontaktowych wskazanych w rozdziale „X. Kontakt z administratorem danych”.
					</p>
					<p className={styles.text}>
						4. Dane mogą być profilowane zgodnie z art. 4 pkt. 4 RODO.
					</p>
					<p className={styles.text}>
						5. Użytkownik jest zobowiązany do podawania danych aktualnych i prawdziwych.
					</p>
					<p className={styles.text}>
						6. Podanie danych osobowych jest zawsze dobrowolne, jednak niezbędne do potrzeb komunikacyjnych, a w przypadku wyboru naszej oferty, jest ono również konieczne w celu zawarcia i prawidłowego wykonania umowy.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>III. Odbiorcy danych osobowych</h2>
					<p className={styles.text}>
						1. Dane Klienta mogą być przekazane podmiotom uprawnionym do ich otrzymania zgodnie z obowiązującym prawem lub w skutek wykonania umowy zawartej bezpośrednio z Klientem, gdy jest to niezbędne do zrealizowania naszych usług.
					</p>
					<p className={styles.text}>
						2. Dane osobowe mogą zostać powierzone zaufanym odbiorcom, w tym w szczególności:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>podmiotowi obsługującemu księgowość;</li>
						<li className={styles.listItem}>firmie kurierskiej;</li>
						<li className={styles.listItem}>firmie świadczącej usługę wysyłki informacji elektronicznej (newsletter) w imieniu Administratora;</li>
						<li className={styles.listItem}>podmiotom pośredniczącym w płatnościach.</li>
					</ul>
					<p className={styles.text}>
						3. W zakresie w jakim dane Użytkowników są przetwarzane z wykorzystaniem plików cookies do celów statystycznych przy użyciu narzędzia Google Analytics, Administrator przekazuje dane Użytkowników do państwa trzeciego – Stanów Zjednoczonych. Google Inc. przystąpił do porozumienia w sprawie Tarczy Prywatności UE-USA. Zgodnie z decyzją Komisji Europejskiej z dnia 12 lipca 2016 r., znak: IP/16/216, przekazywanie danych osobowych do podmiotów z siedzibą w Stanach Zjednoczonych, które przystąpiły do wyżej wymienionego porozumienia, zapewnia odpowiedni stopień ochrony danych osobowych, zgodnie z art. 45 RODO.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>IV. Bezpieczeństwo danych</h2>
					<p className={styles.text}>
						1. Nasz Serwis korzysta z technologii oraz procedur ochrony danych osobowych, które zapewniają należytą ochronę prywatności jego Użytkowników.
					</p>
					<p className={styles.text}>
						2. Dane osobowe Użytkowników Serwisu przechowujemy w bazie danych, do której zastosowano środki techniczne oraz organizacyjne, zapewniające ich ochronę, zgodnie z wymaganiami przepisów dotyczących ochrony danych osobowych, w tym w szczególności zgodnie z:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>RODO;</li>
						<li className={styles.listItem}>ustawą z dnia 16 lipca 2004 r. – Prawo telekomunikacyjne (Dz.U. 2022 poz. 1648 z późn. zm.);</li>
						<li className={styles.listItem}>ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz.U. 2020 poz. 344 z późn. zm.).</li>
					</ul>
					<p className={styles.text}>
						3. Dane osobowe Użytkowników są chronione między innymi w następujący sposób:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>Dostęp do bazy danych osobowych posiadają wyłącznie osoby z upoważnieniem nadanym im przez jej administratora.</li>
						<li className={styles.listItem}>Administrator Serwisu okresowo zmienia swoje hasła administracyjne.</li>
						<li className={styles.listItem}>Serwis zabezpieczony jest certyfikatem SSL, dzięki czemu wprowadzane dane osobowe zostają zaszyfrowane w komputerze Użytkownika i mogą być odczytane tylko na docelowym serwerze.</li>
						<li className={styles.listItem}>W celu ochrony danych osobowych Administrator regularnie wykonuje kopie bezpieczeństwa.</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>V. Pliki cookies</h2>
					<p className={styles.text}>
						1. Podczas korzystania z naszego Serwisu na urządzeniu końcowym Użytkownika zapisywane są pliki cookies (tzw. „ciasteczka”).
					</p>
					<p className={styles.text}>
						2. Komunikat o wykorzystywaniu plików cookies zostaje wyświetlony Użytkownikowi podczas pierwszego otwarcia Serwisu. Korzystanie z Serwisu oznacza wyrażenie zgody na przetwarzanie plików cookies. Jeśli Użytkownik nie chce wyrazić takiej zgody, to powinien go opuścić.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VI. Wymagania techniczne</h2>
					<p className={styles.text}>
						W celu korzystania z naszego Serwisu niezbędne jest posiadanie:
					</p>
					<ul className={styles.list}>
						<li className={styles.listItem}>Urządzenia z dostępem do internetu;</li>
						<li className={styles.listItem}>Przeglądarki internetowej umożliwiającej wyświetlanie stron www wraz z odczyt treści graficznych i wideo.</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VII. Prawa autorskie i odpowiedzialność za treści</h2>
					<p className={styles.text}>
						1. Wszystkie treści umieszczone w Serwisie, w tym zdjęcia, teksty, bezpłatne materiały oraz nagrania wideo, stanowią przedmiot praw autorskich określonych osób i/lub Administratora.
					</p>
					<p className={styles.text}>
						2. Administrator nie wyraża zgody na kopiowanie treści, o których mowa w pkt. 1, w całości lub części bez jego wyraźnej, uprzedniej zgody.
					</p>
					<p className={styles.text}>
						3. Treści przedstawione w Serwisie nie stanowią porad specjalistycznych oraz nie odnoszą się do konkretnego stanu faktycznego. W celu uzyskania pomocy w konkretnej sprawie należy skontaktować się z osobą uprawnioną do udzielania takich porad lub z Administratorem korzystając z danych kontaktowych wskazanych w rozdziale „X. Kontakt z administratorem danych”.
					</p>
					<p className={styles.text}>
						4. Administrator nie ponosi odpowiedzialności za wykorzystanie treści zawartych w Serwisie lub działań bądź zaniechań podejmowanych na ich podstawie.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>VIII. Opinie</h2>
					<p className={styles.text}>
						1. Na stronie internetowej mogą być prezentowanie opinie Klientów dotyczące działalności firmy, w tym publicznie dostępne opinie zgromadzone w ramach profili Google Business.
					</p>
					<p className={styles.text}>
						2. Opinie, o których mowa w pkt. 1, mogą pojawiać się w różnych miejscach na stronie, w tym między innymi na jej stronie głównej.
					</p>
					<p className={styles.text}>
						3. Zamieszczane opinie mogą odsyłać do zewnętrznych narzędzi oraz serwisów prezentujących recenzje, w tym na przykład do opinii pochodzących z profilu Google Business lub profili w mediach społecznościowych.
					</p>
					<p className={styles.text}>
						4. Opinie mogą być prezentowane w różnych formach, w tym między innymi w postaci tekstowej z wizerunkiem oraz danymi osobowymi osoby ją wystawiającej lub tylko z częściowym prezentowaniem tych danych bądź całkowicie bez nich.
					</p>
					<p className={styles.text}>
						5. Klient pozostawiając opinię wyraża zgodę na jej opublikowanie w ramach strony internetowej. Jeśli Klient nie będzie chciał, aby jego opinia wyświetlała się w ramach serwisu powinien o tym poinformować Administratora korzystając z danych kontaktowych wskazanych w rozdziale „X. Kontakt z administratorem danych”. Administrator zobowiązany jest do usunięcia opinii wskazanej przez Klienta.
					</p>
					<p className={styles.text}>
						6. Administrator dokłada wszelkich starań, aby publikowane opinie były rzetelne i pochodziły od osób będących rzeczywistymi Klientami jego działalności.
					</p>
					<p className={styles.text}>
						7. Administrator nie ma obowiązku publikowania wszyskich opinii, a także – gdy uzna to za uzasadnione – ma prawo do ich usuwania.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>IX. Zmiany w Polityce Prywatności</h2>
					<p className={styles.text}>
						1. Polityka Prywatności Serwisu może być zmieniona jedynie w celu podwyższenia standardów ochrony lub jej dostosowania do wymogów powszechnie obowiązującego prawa.
					</p>
					<p className={styles.text}>
						2. Użytkownik Serwisu zostanie każdorazowo poinformowany o zmianie Polityki Prywatności w informacji wysłanej na podany przez niego adres e-mail, jeśli wyraził zgodę na taką formę komunikacji.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.subtitle}>X. Kontakt z administratorem danych</h2>
					<p className={styles.text}>
						1. Wszelkie uwagi, nieprawidłowości oraz żądania dotyczące Polityki Prywatności prosimy wysyłać w wiadomości e-mail na adres: <strong>biuro@bigbudcom.net</strong>.
					</p>
					<p className={styles.text}>
						2. Po rozpatrzeniu Twojego zgłoszenia, udzielimy odpowiedzi wysyłając wiadomość zwrotną na adres poczty elektronicznej, z którego otrzymaliśmy e-mail.
					</p>
				</div>
			</div>
		</div>
	);
}