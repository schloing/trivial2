import { useLocation } from 'preact-iso';
import { Spot } from './Spot.jsx';

export function Header() {
	const { url } = useLocation();

	return (
		<nav>
            <Spot 
                title = "fundamental theorem of calculus"
                src   = "https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20200511041102"
                descr = "the fundamental theorem of calculus is a theorem that is fundamental to calculus"
            />
            <Spot 
                title = "fundamental theorem of calculus"
                src   = "https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20200511041102"
                descr = "the fundamental theorem of calculus is a theorem that is fundamental to calculus"
            />
            <Spot 
                title = "fundamental theorem of calculus"
                src   = "https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20200511041102"
                descr = "the fundamental theorem of calculus is a theorem that is fundamental to calculus"
            />
            <Spot 
                title = "fundamental theorem of calculus"
                src   = "https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20200511041102"
                descr = "the fundamental theorem of calculus is a theorem that is fundamental to calculus"
            />
            <Spot 
                title = "fundamental theorem of calculus"
                src   = "https://static.wikia.nocookie.net/supermarioglitchy4/images/f/f3/Big_chungus.png/revision/latest?cb=20200511041102"
                descr = "the fundamental theorem of calculus is a theorem that is fundamental to calculus"
            />
		</nav>
	);
}
