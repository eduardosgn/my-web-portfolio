import { motion } from "framer-motion";

export default function Exp() {
    return (
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0 }}
            //define animação final
            animate={{ opacity: 1 }}
            //Quando sai da página a animação é feita
            exit={{ opacity: 0 }}
        >
            <h1>
                Experiências
            </h1>
        </motion.div>
    );
};