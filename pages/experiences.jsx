import { motion } from "framer-motion";

export default function Exp() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: {
                duration: 1
            }}}
        >
            <h1>
                Experiências
            </h1>
        </motion.div>
    );
};