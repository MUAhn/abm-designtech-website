import { motion } from "framer-motion"

export default function PageLoader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">

        <motion.img
          src="/assets/logo.webp"
          className="w-24 mx-auto mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="text-white text-xl tracking-widest mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ABM DESIGNTECH
        </motion.div>

        <div className="w-48 h-[2px] bg-white/20 overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-yellow-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2 }}
            onAnimationComplete={onFinish}
          />
        </div>

      </div>
    </motion.div>
  )
}
