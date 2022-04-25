import nato_flag from './../../resources/images/svg_flags/nato.svg';
import european_union_flag from './../../resources/images/svg_flags/european-union.svg';

import alb_flag from './../../resources/images/svg_flags/albania.svg';
import aus_flag from './../../resources/images/svg_flags/australia.svg';
import aut_flag from './../../resources/images/svg_flags/austria.svg';
import bel_flag from './../../resources/images/svg_flags/belgium.svg';
import bgr_flag from './../../resources/images/svg_flags/bulgaria.svg';
import can_flag from './../../resources/images/svg_flags/canada.svg';
import hrv_flag from './../../resources/images/svg_flags/croatia.svg';
import cze_flag from './../../resources/images/svg_flags/czechia.svg';
import dnk_flag from './../../resources/images/svg_flags/denmark.svg';
import est_flag from './../../resources/images/svg_flags/estonia.svg';
import fin_flag from './../../resources/images/svg_flags/finland.svg';
import fta_flag from './../../resources/images/svg_flags/france.svg';
import deu_flag from './../../resources/images/svg_flags/germany.svg';
import grc_flag from './../../resources/images/svg_flags/greece.svg';
import hun_flag from './../../resources/images/svg_flags/hungary.svg';
import isl_flag from './../../resources/images/svg_flags/iceland.svg';
import irl_flag from './../../resources/images/svg_flags/ireland.svg';
import ita_flag from './../../resources/images/svg_flags/italy.svg';
import lva_flag from './../../resources/images/svg_flags/latvia.svg';
import lux_flag from './../../resources/images/svg_flags/luxembourg.svg';
import mlt_flag from './../../resources/images/svg_flags/malta.svg';
import mne_flag from './../../resources/images/svg_flags/montenegro.svg';
import nld_flag from './../../resources/images/svg_flags/netherlands.svg';
import mkd_flag from './../../resources/images/svg_flags/north-macedonia.svg';
import nor_flag from './../../resources/images/svg_flags/norway.svg';
import pol_flag from './../../resources/images/svg_flags/poland.svg';
import prt_flag from './../../resources/images/svg_flags/portugal.svg';
import rou_flag from './../../resources/images/svg_flags/romania.svg';
import svk_flag from './../../resources/images/svg_flags/slovakia.svg';
import svn_flag from './../../resources/images/svg_flags/slovenia.svg';
import esp_flag from './../../resources/images/svg_flags/spain.svg';
import swe_flag from './../../resources/images/svg_flags/sweden.svg';
import che_flag from './../../resources/images/svg_flags/switzerland.svg';
import tur_flag from './../../resources/images/svg_flags/turkey.svg';
import usa_flag from './../../resources/images/svg_flags/usa.svg';
import gbr_flag from './../../resources/images/svg_flags/united-kingdom.svg';

export interface CountryOption {
    value: String;
    label: JSX.Element;
}

export interface GroupedOptions {
    label: String;
    options: CountryOption[];
}

const style = {
    img: {
        width: '1.7rem',
        height: 'auto',
        marginRight: '0.8rem'
    },
}

const associationOptions = [
    { value: 'nato', label: (
        <div className="label">
            <img src={nato_flag} alt="flag" style={style.img}/>
            <span>Nato</span>
        </div>
    )},
    { value: 'eu', label: (
        <div className="label">
            <img src={european_union_flag} alt="flag" style={style.img}/>
            <span>EU</span>
    </div>
    ) }
  ];
  
  const countryOptions: CountryOption[] = [
	{ value: 'albania',label: (
		<div className='label'>
			<img src={alb_flag} alt='albania_flag' style={style.img}/>
			<span>Albania</span>
		</div>
	)},
	{ value: 'australia',label: (
		<div className='label'>
			<img src={aus_flag} alt='australia_flag' style={style.img}/>
			<span>Australia</span>
		</div>
	)},
	{ value: 'austria',label: (
		<div className='label'>
			<img src={aut_flag} alt='austria_flag' style={style.img}/>
			<span>Austria</span>
		</div>
	)},
	{ value: 'belgium',label: (
		<div className='label'>
			<img src={bel_flag} alt='belgium_flag' style={style.img}/>
			<span>Belgium</span>
		</div>
	)},
	{ value: 'bulgaria',label: (
		<div className='label'>
			<img src={bgr_flag} alt='bulgaria_flag' style={style.img}/>
			<span>Bulgaria</span>
		</div>
	)},
	{ value: 'canada',label: (
		<div className='label'>
			<img src={can_flag} alt='canada_flag' style={style.img}/>
			<span>Canada</span>
		</div>
	)},
	{ value: 'croatia',label: (
		<div className='label'>
			<img src={hrv_flag} alt='croatia_flag' style={style.img}/>
			<span>Croatia</span>
		</div>
	)},
	{ value: 'czechia',label: (
		<div className='label'>
			<img src={cze_flag} alt='czechia_flag' style={style.img}/>
			<span>Czechia</span>
		</div>
	)},
	{ value: 'denmark',label: (
		<div className='label'>
			<img src={dnk_flag} alt='denmark_flag' style={style.img}/>
			<span>Denmark</span>
		</div>
	)},
	{ value: 'estonia',label: (
		<div className='label'>
			<img src={est_flag} alt='estonia_flag' style={style.img}/>
			<span>Estonia</span>
		</div>
	)},
	{ value: 'finland',label: (
		<div className='label'>
			<img src={fin_flag} alt='finland_flag' style={style.img}/>
			<span>Finland</span>
		</div>
	)},
	{ value: 'france',label: (
		<div className='label'>
			<img src={fta_flag} alt='france_flag' style={style.img}/>
			<span>France</span>
		</div>
	)},
	{ value: 'germany',label: (
		<div className='label'>
			<img src={deu_flag} alt='germany_flag' style={style.img}/>
			<span>Germany</span>
		</div>
	)},
	{ value: 'greece',label: (
		<div className='label'>
			<img src={grc_flag} alt='greece_flag' style={style.img}/>
			<span>Greece</span>
		</div>
	)},
	{ value: 'hungary',label: (
		<div className='label'>
			<img src={hun_flag} alt='hungary_flag' style={style.img}/>
			<span>Hungary</span>
		</div>
	)},
	{ value: 'iceland',label: (
		<div className='label'>
			<img src={isl_flag} alt='iceland_flag' style={style.img}/>
			<span>Iceland</span>
		</div>
	)},
	{ value: 'ireland',label: (
		<div className='label'>
			<img src={irl_flag} alt='ireland_flag' style={style.img}/>
			<span>Ireland</span>
		</div>
	)},
	{ value: 'italy',label: (
		<div className='label'>
			<img src={ita_flag} alt='italy_flag' style={style.img}/>
			<span>Italy</span>
		</div>
	)},
	{ value: 'latvia',label: (
		<div className='label'>
			<img src={lva_flag} alt='latvia_flag' style={style.img}/>
			<span>Latvia</span>
		</div>
	)},
	{ value: 'luxembourg',label: (
		<div className='label'>
			<img src={lux_flag} alt='luxembourg_flag' style={style.img}/>
			<span>Luxembourg</span>
		</div>
	)},
	{ value: 'malta',label: (
		<div className='label'>
			<img src={mlt_flag} alt='malta_flag' style={style.img}/>
			<span>Malta</span>
		</div>
	)},
	{ value: 'montenegro',label: (
		<div className='label'>
			<img src={mne_flag} alt='montenegro_flag' style={style.img}/>
			<span>Montenegro</span>
		</div>
	)},
	{ value: 'netherlands',label: (
		<div className='label'>
			<img src={nld_flag} alt='netherlands_flag' style={style.img}/>
			<span>Netherlands</span>
		</div>
	)},
	{ value: 'north_macedonia',label: (
		<div className='label'>
			<img src={mkd_flag} alt='north_macedonia_flag' style={style.img}/>
			<span>North Macedonia</span>
		</div>
	)},
	{ value: 'norway',label: (
		<div className='label'>
			<img src={nor_flag} alt='norway_flag' style={style.img}/>
			<span>Norway</span>
		</div>
	)},
	{ value: 'poland',label: (
		<div className='label'>
			<img src={pol_flag} alt='poland_flag' style={style.img}/>
			<span>Poland</span>
		</div>
	)},
	{ value: 'portugal',label: (
		<div className='label'>
			<img src={prt_flag} alt='portugal_flag' style={style.img}/>
			<span>Portugal</span>
		</div>
	)},
	{ value: 'romania',label: (
		<div className='label'>
			<img src={rou_flag} alt='romania_flag' style={style.img}/>
			<span>Romania</span>
		</div>
	)},
	{ value: 'slovakia',label: (
		<div className='label'>
			<img src={svk_flag} alt='slovakia_flag' style={style.img}/>
			<span>Slovakia</span>
		</div>
	)},
	{ value: 'slovenia',label: (
		<div className='label'>
			<img src={svn_flag} alt='slovenia_flag' style={style.img}/>
			<span>Slovenia</span>
		</div>
	)},
	{ value: 'spain',label: (
		<div className='label'>
			<img src={esp_flag} alt='spain_flag' style={style.img}/>
			<span>Spain</span>
		</div>
	)},
	{ value: 'sweden',label: (
		<div className='label'>
			<img src={swe_flag} alt='sweden_flag' style={style.img}/>
			<span>Sweden</span>
		</div>
	)},
	{ value: 'switzerland',label: (
		<div className='label'>
			<img src={che_flag} alt='switzerland_flag' style={style.img}/>
			<span>Switzerland</span>
		</div>
	)},
	{ value: 'turkey',label: (
		<div className='label'>
			<img src={tur_flag} alt='turkey_flag' style={style.img}/>
			<span>Turkey</span>
		</div>
	)},
	{ value: 'usa',label: (
		<div className='label'>
			<img src={usa_flag} alt='usa_flag' style={style.img}/>
			<span>USA</span>
		</div>
	)},
	{ value: 'united_kingdom',label: (
		<div className='label'>
			<img src={gbr_flag} alt='united_kingdom_flag' style={style.img}/>
			<span>United Kingdom</span>
		</div>
	)},
];

const dropwdownOptions: GroupedOptions[] = [
{
    label: "association",
    options: associationOptions,
},
{
    label: "country",
    options: countryOptions
}
];

export default dropwdownOptions;