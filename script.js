// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelector('.cont-kembali').addEventListener('click', function() {
    window.location.href = 'index.html';
});


document.querySelector('.cont-klasemen').addEventListener('click', function() {
    window.location.href = 'indexa.html';
});

function redirectToPage() {
            var selectedPage = document.getElementById("pageSelector").value;
            if (selectedPage) {
                window.location.href = selectedPage; // Pindah halaman sesuai pilihan
            }
        }

function updateKlasemen() {
    const output = document.getElementById('output');
    const selectedValue = document.getElementById('options').value;

    // Define tables as HTML strings
    const tables = {
        text1: `
            <table><tr><th>NO</th><th>TRAINER</th><th>GAME PLAYED</th><th>WIN</th><th>DRAW</th><th>LOSE</th><th>ROUND W/L</th><th>TOTAL POINT</th></tr>
	    <tr><td>1</td><td>DELUVROSES</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>2</td><td>DASH</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>3</td><td>POCKET</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>4</td><td>NOFAL</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>5</td><td>HISTORIA</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>6</td><td>ALMOND</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>7</td><td>カンコ</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>8</td><td>ESPADAS</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>9</td><td>IDEAVOLUTION</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr><tr><td>10</td><td>BROSS</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr>
	</table>
			`,
        text2: `
            <table><tr><th>NO</th><th>TRAINER</th><th>GAME PLAYED</th><th>WIN</th><th>DRAW</th><th>LOSE</th><th>ROUND W/L</th><th>TOTAL POINT</th></tr>
	    <tr><td>1</td><td>V</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>2</td><td>TT_ANDREAZTCGP</td><td>1</td><td>1</td><td>0</td><td>0</td><td>2</td><td>3</td></tr><tr><td>3</td><td>VHENTIL</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>4</td><td>LEONCUN</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>5</td><td>V&lt;3D</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>6</td><td>TOSHIYUKI</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>7</td><td>PISH</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>8</td><td>NEIICHIRO</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>9</td><td>NOMAKEUP</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-2</td><td>0</td></tr><tr><td>10</td><td>JO2</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr>
	</table>
        `,
        text3: `
            <table><tr><th>NO</th><th>TRAINER</th><th>GAME PLAYED</th><th>WIN</th><th>DRAW</th><th>LOSE</th><th>ROUND W/L</th><th>TOTAL POINT</th></tr>
	    <tr><td>1</td><td>ALICE</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>2</td><td>ASH</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>3</td><td>CHRONZ</td><td>1</td><td>1</td><td>0</td><td>0</td><td>2</td><td>3</td></tr><tr><td>4</td><td>KHONTOL</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>5</td><td>LCIOUS</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>6</td><td>ULTIMA</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>7</td><td>WAFA ANSHARY</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>8</td><td>ICARUSZ</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-2</td><td>0</td></tr><tr><td>9</td><td>MINERVA</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr><tr><td>10</td><td>7L.</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr>
     	</table>
        `,
        text4: `
            <table><tr><th>NO</th><th>TRAINER</th><th>GAME PLAYED</th><th>WIN</th><th>DRAW</th><th>LOSE</th><th>ROUND W/L</th><th>TOTAL POINT</th></tr>
	    <tr><td>1</td><td>RGC</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>2</td><td>PEYEUM</td><td>1</td><td>1</td><td>0</td><td>0</td><td>3</td><td>3</td></tr><tr><td>3</td><td>KUYANG</td><td>1</td><td>1</td><td>0</td><td>0</td><td>2</td><td>3</td></tr><tr><td>4</td><td>リザードンの44</td><td>1</td><td>1</td><td>0</td><td>0</td><td>2</td><td>3</td></tr><tr><td>5</td><td>ユタ</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>6</td><td>BLACKMUMBA.ID</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>7</td><td>NEMOO</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-2</td><td>0</td></tr><tr><td>8</td><td>SMOKER</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-2</td><td>0</td></tr><tr><td>9</td><td>AZURELEAA</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr><tr><td>10</td><td>UCII</td><td>1</td><td>0</td><td>0</td><td>1</td><td>-3</td><td>0</td></tr>
	</table>

        `,
        text5: `
            <table><tr><th colspan="5">MATCH DAY 1 : SENIN, 20 JANUARI 2025</th></tr><tr><td>IDEALVOLUTION</td><td>0</td><td>VS</td><td>3</td><td>DASH</td></tr><tr><td>POCKET</td><td>2</td><td>VS</td><td>2</td><td>NOFAL</td></tr><tr><td>BROSS</td><td>0</td><td>VS</td><td>3</td><td>DELUVROSES</td></tr><tr><td>HISTORIA</td><td>2</td><td>VS</td><td>2</td><td>ALMOND</td></tr><tr><td>カンコ</td><td>2</td><td>VS</td><td>2</td><td>ESPADAS</td></tr>
	    <tr><th colspan="5">MATCH DAY 2 : SELASA, 21 JANUARI 2025</th></tr><tr><td>NOFAL</td><td>-</td><td>VS</td><td>-</td><td>IDEALVOLUTION</td></tr><tr><td>DELUVROSES</td><td>-</td><td>VS</td><td>-</td><td>DASH</td></tr><tr><td>ALMOND</td><td>-</td><td>VS</td><td>-</td><td>POCKET</td></tr><tr><td>ESPADAS</td><td>-</td><td>VS</td><td>-</td><td>BROSS</td></tr><tr><td>カンコ</td><td>-</td><td>VS</td><td>-</td><td>HISTORIA</td></tr><tr><th colspan="5">MATCH DAY 3 : RABU, 22 JANUARI 2025</th></tr><tr><td>IDEALVOLUTION</td><td>-</td><td>VS</td><td>-</td><td>DELUVROSES</td></tr><tr><td>NOFAL</td><td>-</td><td>VS</td><td>-</td><td>ALMOND</td></tr><tr><td>DASH</td><td>-</td><td>VS</td><td>-</td><td>ESPADAS</td></tr><tr><td>POCKET</td><td>-</td><td>VS</td><td>-</td><td>カンコ</td></tr><tr><td>BROSS</td><td>-</td><td>VS</td><td>-</td><td>HISTORIA</td></tr><tr><th colspan="5">MATCH DAY 4 : KAMIS, 23 JANUARI 2025</th></tr><tr><td>ALMOND</td><td>-</td><td>VS</td><td>-</td><td>IDEALVOLUTION</td></tr><tr><td>ESPADAS</td><td>-</td><td>VS</td><td>-</td><td>DELUVROSES</td></tr><tr><td>カンコ</td><td>-</td><td>VS</td><td>-</td><td>NOFAL</td></tr><tr><td>HISTORIA</td><td>-</td><td>VS</td><td>-</td><td>DASH</td></tr><tr><td>BROSS</td><td>-</td><td>VS</td><td>-</td><td>POCKET</td></tr><tr><th colspan="5">MATCH DAY 5 : SABTU, 25 JANUARI 2025</th></tr><tr><td>IDEALVOLUTION</td><td>-</td><td>VS</td><td>-</td><td>ESPADAS</td></tr><tr><td>ALMOND</td><td>-</td><td>VS</td><td>-</td><td>カンコ</td></tr><tr><td>DELUVROSES</td><td>-</td><td>VS</td><td>-</td><td>HISTORIA</td></tr><tr><td>NOFAL</td><td>-</td><td>VS</td><td>-</td><td>BROSS</td></tr><tr><td>DASH</td><td>-</td><td>VS</td><td>-</td><td>POCKET</td></tr><tr><th colspan="5">MATCH DAY 6 : MINGGU, 26 JANUARI 2025</th></tr><tr><td>カンコ</td><td>-</td><td>VS</td><td>-</td><td>IDEALVOLUTION</td></tr><tr><td>HISTORIA</td><td>-</td><td>VS</td><td>-</td><td>ESPADAS</td></tr><tr><td>BROSS</td><td>-</td><td>VS</td><td>-</td><td>ALMOND</td></tr><tr><td>POCKET</td><td>-</td><td>VS</td><td>-</td><td>DELUVROSES</td></tr><tr><td>DASH</td><td>-</td><td>VS</td><td>-</td><td>NOFAL</td></tr><tr><th colspan="5">MATCH DAY 7 : SENIN, 27 JANUARI 2025</th></tr><tr><td>IDEALVOLUTION</td><td>-</td><td>VS</td><td>-</td><td>HISTORIA</td></tr><tr><td>BROSS</td><td>-</td><td>VS</td><td>-</td><td>カンコ</td></tr><tr><td>ESPADAS</td><td>-</td><td>VS</td><td>-</td><td>POCKET</td></tr><tr><td>ALMOND</td><td>-</td><td>VS</td><td>-</td><td>DASH</td></tr><tr><td>DELUVROSES</td><td>-</td><td>VS</td><td>-</td><td>NOFAL</td></tr><tr><th colspan="5">MATCH DAY 8 : SELASA, 28 JANUARI 2025</th></tr><tr><td>BROSS</td><td>-</td><td>VS</td><td>-</td><td>IDEALVOLUTION</td></tr><tr><td>POCKET</td><td>-</td><td>VS</td><td>-</td><td>HISTORIA</td></tr><tr><td>DASH</td><td>-</td><td>VS</td><td>-</td><td>カンコ</td></tr><tr><td>NOFAL</td><td>-</td><td>VS</td><td>-</td><td>ESPADAS</td></tr><tr><td>DELUVROSES</td><td>-</td><td>VS</td><td>-</td><td>ALMOND</td></tr><tr><th colspan="5">MATCH DAY 9 : RABU, 29 JANUARI 2025</th></tr><tr><td>IDEALVOLUTION</td><td>-</td><td>VS</td><td>-</td><td>POCKET</td></tr><tr><td>DASH</td><td>-</td><td>VS</td><td>-</td><td>BROSS</td></tr><tr><td>HISTORIA</td><td>-</td><td>VS</td><td>-</td><td>NOFAL</td></tr><tr><td>カンコ</td><td>-</td><td>VS</td><td>-</td><td>DELUVROSES</td></tr><tr><td>ESPADAS</td><td>-</td><td>VS</td><td>-</td><td>ALMOND</td></tr></table>

        `,
        text6: `
            <table><tr><th colspan="5">MATCH DAY 1 : SENIN, 20 JANUARI 2025</th></tr><tr><td>PISH</td><td>2</td><td>VS</td><td>2</td><td>NEIICHIRO</td></tr><tr><td>V</td><td>3</td><td>VS</td><td>0</td><td>JO2</td></tr><tr><td>V&lt;3D</td><td>2</td><td>VS</td><td>2</td><td>TOSHIYUKI</td></tr><tr><td>VHENTIL</td><td>2</td><td>VS</td><td>2</td><td>LEONCUN</td></tr><tr><td>TT_ANDREAZTCGP</td><td>3</td><td>VS</td><td>1</td><td>NOMAKEUP</td></tr>
	    <tr><th colspan="5">MATCH DAY 2 : SELASA, 21 JANUARI 2025</th></tr><tr><td>JO2</td><td>-</td><td>VS</td><td>-</td><td>PISH</td></tr><tr><td>TOSHIYUKI</td><td>-</td><td>VS</td><td>-</td><td>NEIICHIRO</td></tr><tr><td>LEONCUN</td><td>-</td><td>VS</td><td>-</td><td>V</td></tr><tr><td>NOMAKEUP</td><td>-</td><td>VS</td><td>-</td><td>V&lt;3D</td></tr><tr><td>TT_ANDREAZTCGP</td><td>-</td><td>VS</td><td>-</td><td>VHENTIL</td></tr><tr><th colspan="5">MATCH DAY 3 : RABU, 22 JANUARI 2025</th></tr><tr><td>PISH</td><td>-</td><td>VS</td><td>-</td><td>TOSHIYUKI</td></tr><tr><td>JO2</td><td>-</td><td>VS</td><td>-</td><td>LEONCUN</td></tr><tr><td>NEIICHIRO</td><td>-</td><td>VS</td><td>-</td><td>NOMAKEUP</td></tr><tr><td>V</td><td>-</td><td>VS</td><td>-</td><td>TT_ANDREAZTCGP</td></tr><tr><td>V&lt;3D</td><td>-</td><td>VS</td><td>-</td><td>VHENTIL</td></tr><tr><th colspan="5">MATCH DAY 4 : KAMIS, 23 JANUARI 2025</th></tr><tr><td>LEONCUN</td><td>-</td><td>VS</td><td>-</td><td>PISH</td></tr><tr><td>NOMAKEUP</td><td>-</td><td>VS</td><td>-</td><td>TOSHIYUKI</td></tr><tr><td>TT_ANDREAZTCGP</td><td>-</td><td>VS</td><td>-</td><td>JO2</td></tr><tr><td>VHENTIL</td><td>-</td><td>VS</td><td>-</td><td>NEIICHIRO</td></tr><tr><td>V&lt;3D</td><td>-</td><td>VS</td><td>-</td><td>V</td></tr><tr><th colspan="5">MATCH DAY 5 : SABTU, 25 JANUARI 2025</th></tr><tr><td>PISH</td><td>-</td><td>VS</td><td>-</td><td>NOMAKEUP</td></tr><tr><td>LEONCUN</td><td>-</td><td>VS</td><td>-</td><td>TT_ANDREAZTCGP</td></tr><tr><td>TOSHIYUKI</td><td>-</td><td>VS</td><td>-</td><td>VHENTIL</td></tr><tr><td>JO2</td><td>-</td><td>VS</td><td>-</td><td>V&lt;3D</td></tr><tr><td>NEIICHIRO</td><td>-</td><td>VS</td><td>-</td><td>V</td></tr><tr><th colspan="5">MATCH DAY 6 : MINGGU, 26 JANUARI 2025</th></tr><tr><td>TT_ANDREAZTCGP</td><td>-</td><td>VS</td><td>-</td><td>PISH</td></tr><tr><td>VHENTIL</td><td>-</td><td>VS</td><td>-</td><td>NOMAKEUP</td></tr><tr><td>V&lt;3D</td><td>-</td><td>VS</td><td>-</td><td>LEONCUN</td></tr><tr><td>V</td><td>-</td><td>VS</td><td>-</td><td>TOSHIYUKI</td></tr><tr><td>NEIICHIRO</td><td>-</td><td>VS</td><td>-</td><td>JO2</td></tr><tr><th colspan="5">MATCH DAY 7 : SENIN, 27 JANUARI 2025</th></tr><tr><td>PISH</td><td>-</td><td>VS</td><td>-</td><td>VHENTIL</td></tr><tr><td>V&lt;3D</td><td>-</td><td>VS</td><td>-</td><td>TT_ANDREAZTCGP</td></tr><tr><td>NOMAKEUP</td><td>-</td><td>VS</td><td>-</td><td>V</td></tr><tr><td>LEONCUN</td><td>-</td><td>VS</td><td>-</td><td>NEIICHIRO</td></tr><tr><td>TOSHIYUKI</td><td>-</td><td>VS</td><td>-</td><td>JO2</td></tr><tr><th colspan="5">MATCH DAY 8 : SELASA, 28 JANUARI 2025</th></tr><tr><td>V&lt;3D</td><td>-</td><td>VS</td><td>-</td><td>PISH</td></tr><tr><td>V</td><td>-</td><td>VS</td><td>-</td><td>VHENTIL</td></tr><tr><td>NEIICHIRO</td><td>-</td><td>VS</td><td>-</td><td>TT_ANDREAZTCGP</td></tr><tr><td>JO2</td><td>-</td><td>VS</td><td>-</td><td>NOMAKEUP</td></tr><tr><td>TOSHIYUKI</td><td>-</td><td>VS</td><td>-</td><td>LEONCUN</td></tr><tr><th colspan="5">MATCH DAY 9 : RABU, 29 JANUARI 2025</th></tr><tr><td>PISH</td><td>-</td><td>VS</td><td>-</td><td>V</td></tr><tr><td>NEIICHIRO</td><td>-</td><td>VS</td><td>-</td><td>V&lt;3D</td></tr><tr><td>VHENTIL</td><td>-</td><td>VS</td><td>-</td><td>JO2</td></tr><tr><td>TT_ANDREAZTCGP</td><td>-</td><td>VS</td><td>-</td><td>TOSHIYUKI</td></tr><tr><td>NOMAKEUP</td><td>-</td><td>VS</td><td>-</td><td>LEONCUN</td></tr></table>

        `,
        text7: `
            <table><tr><th colspan="5">MATCH DAY 1 : SENIN, 20 JANUARI 2025</th></tr><tr><td>7L.</td><td>0</td><td>VS</td><td>3</td><td>ALICE</td></tr><tr><td>KHONTOL</td><td>2</td><td>VS</td><td>2</td><td>LCIOUS</td></tr><tr><td>MINERVA</td><td>0</td><td>VS</td><td>3</td><td>ASH</td></tr><tr><td>ULTIMA</td><td>2</td><td>VS</td><td>2</td><td>WAFA ANSHARY</td></tr><tr><td>ICARUSZ</td><td>1</td><td>VS</td><td>3</td><td>CHRONZ</td>
	    </tr><tr><th colspan="5">MATCH DAY 2 : SELASA, 21 JANUARI 2025</th></tr><tr><td>LCIOUS</td><td>-</td><td>VS</td><td>-</td><td>7L.</td></tr><tr><td>ASH</td><td>-</td><td>VS</td><td>-</td><td>ALICE</td></tr><tr><td>WAFA ANSHARY</td><td>-</td><td>VS</td><td>-</td><td>KHONTOL</td></tr><tr><td>CHRONZ</td><td>-</td><td>VS</td><td>-</td><td>MINERVA</td></tr><tr><td>ICARUSZ</td><td>-</td><td>VS</td><td>-</td><td>ULTIMA</td></tr><tr><th colspan="5">MATCH DAY 3 : RABU, 22 JANUARI 2025</th></tr><tr><td>7L.</td><td>-</td><td>VS</td><td>-</td><td>ASH</td></tr><tr><td>LCIOUS</td><td>-</td><td>VS</td><td>-</td><td>WAFA ANSHARY</td></tr><tr><td>ALICE</td><td>-</td><td>VS</td><td>-</td><td>CHRONZ</td></tr><tr><td>KHONTOL</td><td>-</td><td>VS</td><td>-</td><td>ICARUSZ</td></tr><tr><td>MINERVA</td><td>-</td><td>VS</td><td>-</td><td>ULTIMA</td></tr><tr><th colspan="5">MATCH DAY 4 : KAMIS, 23 JANUARI 2025</th></tr><tr><td>WAFA ANSHARY</td><td>-</td><td>VS</td><td>-</td><td>7L.</td></tr><tr><td>CHRONZ</td><td>-</td><td>VS</td><td>-</td><td>ASH</td></tr><tr><td>ICARUSZ</td><td>-</td><td>VS</td><td>-</td><td>LCIOUS</td></tr><tr><td>ULTIMA</td><td>-</td><td>VS</td><td>-</td><td>ALICE</td></tr><tr><td>MINERVA</td><td>-</td><td>VS</td><td>-</td><td>KHONTOL</td></tr><tr><th colspan="5">MATCH DAY 5 : SABTU, 25 JANUARI 2025</th></tr><tr><td>7L.</td><td>-</td><td>VS</td><td>-</td><td>CHRONZ</td></tr><tr><td>WAFA ANSHARY</td><td>-</td><td>VS</td><td>-</td><td>ICARUSZ</td></tr><tr><td>ASH</td><td>-</td><td>VS</td><td>-</td><td>ULTIMA</td></tr><tr><td>LCIOUS</td><td>-</td><td>VS</td><td>-</td><td>MINERVA</td></tr><tr><td>ALICE</td><td>-</td><td>VS</td><td>-</td><td>KHONTOL</td></tr><tr><th colspan="5">MATCH DAY 6 : MINGGU, 26 JANUARI 2025</th></tr><tr><td>ICARUSZ</td><td>-</td><td>VS</td><td>-</td><td>7L.</td></tr><tr><td>ULTIMA</td><td>-</td><td>VS</td><td>-</td><td>CHRONZ</td></tr><tr><td>MINERVA</td><td>-</td><td>VS</td><td>-</td><td>WAFA ANSHARY</td></tr><tr><td>KHONTOL</td><td>-</td><td>VS</td><td>-</td><td>ASH</td></tr><tr><td>ALICE</td><td>-</td><td>VS</td><td>-</td><td>LCIOUS</td></tr><tr><th colspan="5">MATCH DAY 7 : SENIN, 27 JANUARI 2025</th></tr><tr><td>7L.</td><td>-</td><td>VS</td><td>-</td><td>ULTIMA</td></tr><tr><td>MINERVA</td><td>-</td><td>VS</td><td>-</td><td>ICARUSZ</td></tr><tr><td>CHRONZ</td><td>-</td><td>VS</td><td>-</td><td>KHONTOL</td></tr><tr><td>WAFA ANSHARY</td><td>-</td><td>VS</td><td>-</td><td>ALICE</td></tr><tr><td>ASH</td><td>-</td><td>VS</td><td>-</td><td>LCIOUS</td></tr><tr><th colspan="5">MATCH DAY 8 : SELASA, 28 JANUARI 2025</th></tr><tr><td>MINERVA</td><td>-</td><td>VS</td><td>-</td><td>7L.</td></tr><tr><td>KHONTOL</td><td>-</td><td>VS</td><td>-</td><td>ULTIMA</td></tr><tr><td>ALICE</td><td>-</td><td>VS</td><td>-</td><td>ICARUSZ</td></tr><tr><td>LCIOUS</td><td>-</td><td>VS</td><td>-</td><td>CHRONZ</td></tr><tr><td>ASH</td><td>-</td><td>VS</td><td>-</td><td>WAFA ANSHARY</td></tr><tr><th colspan="5">MATCH DAY 9 : RABU, 29 JANUARI 2025</th></tr><tr><td>7L.</td><td>-</td><td>VS</td><td>-</td><td>KHONTOL</td></tr><tr><td>ALICE</td><td>-</td><td>VS</td><td>-</td><td>MINERVA</td></tr><tr><td>ULTIMA</td><td>-</td><td>VS</td><td>-</td><td>LCIOUS</td></tr><tr><td>ICARUSZ</td><td>-</td><td>VS</td><td>-</td><td>ASH</td></tr><tr><td>CHRONZ</td><td>-</td><td>VS</td><td>-</td><td>WAFA ANSHARY</td></tr></table>

        `,
        text8: `
            <table><tr><th colspan="5">MATCH DAY 1 : SENIN, 20 JANUARI 2025</th></tr><tr><td>AZURELAA</td><td>0</td><td>VS</td><td>3</td><td>PEYEUM</td></tr><tr><td>ユタ</td><td>2</td><td>VS</td><td>2</td><td>BLACKMUMBA ID</td></tr><tr><td>NEMOO</td><td>1</td><td>VS</td><td>3</td><td>KUYANG</td></tr><tr><td>UCII</td><td>0</td><td>VS</td><td>3</td><td>RGC</td></tr><tr><td>リザードンの44</td><td>3</td><td>VS</td><td>1</td><td>SMOKER</td></tr>
	    <tr><th colspan="5">MATCH DAY 2 : SELASA, 21 JANUARI 2025</th></tr><tr><td>BLACKMUMBA ID</td><td>-</td><td>VS</td><td>-</td><td>AZURELAA</td></tr><tr><td>KUYANG</td><td>-</td><td>VS</td><td>-</td><td>PEYEUM</td></tr><tr><td>RGC</td><td>-</td><td>VS</td><td>-</td><td>ユタ</td></tr><tr><td>SMOKER</td><td>-</td><td>VS</td><td>-</td><td>NEMOO</td></tr><tr><td>リザードンの44</td><td>-</td><td>VS</td><td>-</td><td>UCII</td></tr><tr><th colspan="5">MATCH DAY 3 : RABU, 22 JANUARI 2025</th></tr><tr><td>AZURELAA</td><td>-</td><td>VS</td><td>-</td><td>KUYANG</td></tr><tr><td>BLACKMUMBA ID</td><td>-</td><td>VS</td><td>-</td><td>RGC</td></tr><tr><td>PEYEUM</td><td>-</td><td>VS</td><td>-</td><td>SMOKER</td></tr><tr><td>ユタ</td><td>-</td><td>VS</td><td>-</td><td>リザードンの44</td></tr><tr><td>NEMOO</td><td>-</td><td>VS</td><td>-</td><td>UCII</td></tr><tr><th colspan="5">MATCH DAY 4 : KAMIS, 23 JANUARI 2025</th></tr><tr><td>RGC</td><td>-</td><td>VS</td><td>-</td><td>AZURELAA</td></tr><tr><td>SMOKER</td><td>-</td><td>VS</td><td>-</td><td>KUYANG</td></tr><tr><td>リザードンの44</td><td>-</td><td>VS</td><td>-</td><td>BLACKMUMBA ID</td></tr><tr><td>UCII</td><td>-</td><td>VS</td><td>-</td><td>PEYEUM</td></tr><tr><td>NEMOO</td><td>-</td><td>VS</td><td>-</td><td>ユタ</td></tr><tr><th colspan="5">MATCH DAY 5 : SABTU, 25 JANUARI 2025</th></tr><tr><td>AZURELAA</td><td>-</td><td>VS</td><td>-</td><td>SMOKER</td></tr><tr><td>RGC</td><td>-</td><td>VS</td><td>-</td><td>リザードンの44</td></tr><tr><td>KUYANG</td><td>-</td><td>VS</td><td>-</td><td>UCII</td></tr><tr><td>BLACKMUMBA ID</td><td>-</td><td>VS</td><td>-</td><td>NEMOO</td></tr><tr><td>PEYEUM</td><td>-</td><td>VS</td><td>-</td><td>ユタ</td></tr><tr><th colspan="5">MATCH DAY 6 : MINGGU, 26 JANUARI 2025</th></tr><tr><td>リザードンの44</td><td>-</td><td>VS</td><td>-</td><td>AZURELAA</td></tr><tr><td>UCII</td><td>-</td><td>VS</td><td>-</td><td>SMOKER</td></tr><tr><td>NEMOO</td><td>-</td><td>VS</td><td>-</td><td>RGC</td></tr><tr><td>ユタ</td><td>-</td><td>VS</td><td>-</td><td>KUYANG</td></tr><tr><td>PEYEUM</td><td>-</td><td>VS</td><td>-</td><td>BLACKMUMBA ID</td></tr><tr><th colspan="5">MATCH DAY 7 : SENIN, 27 JANUARI 2025</th></tr><tr><td>AZURELAA</td><td>-</td><td>VS</td><td>-</td><td>UCII</td></tr><tr><td>NEMOO</td><td>-</td><td>VS</td><td>-</td><td>リザードンの44</td></tr><tr><td>SMOKER</td><td>-</td><td>VS</td><td>-</td><td>ユタ</td></tr><tr><td>RGC</td><td>-</td><td>VS</td><td>-</td><td>PEYEUM</td></tr><tr><td>KUYANG</td><td>-</td><td>VS</td><td>-</td><td>BLACKMUMBA ID</td></tr><tr><th colspan="5">MATCH DAY 8 : SELASA, 28 JANUARI 2025</th></tr><tr><td>NEMOO</td><td>-</td><td>VS</td><td>-</td><td>AZURELAA</td></tr><tr><td>ユタ</td><td>-</td><td>VS</td><td>-</td><td>UCII</td></tr><tr><td>PEYEUM</td><td>-</td><td>VS</td><td>-</td><td>リザードンの44</td></tr><tr><td>BLACKMUMBA ID</td><td>-</td><td>VS</td><td>-</td><td>SMOKER</td></tr><tr><td>KUYANG</td><td>-</td><td>VS</td><td>-</td><td>RGC</td></tr><tr><th colspan="5">MATCH DAY 9 : RABU, 29 JANUARI 2025</th></tr><tr><td>AZURELAA</td><td>-</td><td>VS</td><td>-</td><td>ユタ</td></tr><tr><td>PEYEUM</td><td>-</td><td>VS</td><td>-</td><td>NEMOO</td></tr><tr><td>UCII</td><td>-</td><td>VS</td><td>-</td><td>BLACKMUMBA ID</td></tr><tr><td>リザードンの44</td><td>-</td><td>VS</td><td>-</td><td>KUYANG</td></tr><tr><td>SMOKER</td><td>-</td><td>VS</td><td>-</td><td>RGC</td></tr></table>

        `,
    };

    // Update the output div with the selected table or a default message
    output.innerHTML = tables[selectedValue] || `<h2>Silahkan Pilih Rank Yang Ingin Dilihat.</h2>`;
}

