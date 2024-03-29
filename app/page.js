'use client'
import React from "react";
import Link from "next/link";
import Category from "./components/category"
import LayoutAbout from "./components/layout-about";
import { motion } from "framer-motion"
import Image from 'next/image'


export default function Page() {

  return (
    <>
      <div className="main-container" >

        <motion.div className='hero d-flex'
          initial={{
            opacity: 0,
            x: 2 % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >
          <div className='heroinnerdiv'>

            <h4 className='new-tag'>NEW PRODUCT</h4>

            <span className=' title header-title'>
              <h1>
                XX99 MARK II
              </h1>
              <h1>
                HEADPHONES
              </h1>
            </span>

            <p className='pgh header-pgh'>
              Experience natural, lifelike
              audio and exceptional build
              quality made for the passionate
              music enthusiast.
            </p>

            <Link href={`/products/${"xx99-mark-one-headphones"}`}>
              <motion.button
                className='product-btn header-btn'
                initial={{
                  y: 0,
                }}
                animate={{
                  y: 7,
                }}

                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1,
                }}
              >SEE PRODUCTS</motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 1 % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >
          <Category />
        </motion.div>

        <motion.div
          className="homepage-speaker-detail-1 d-flex"
          initial={{
            opacity: 0,
            x: 2 % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt='speaker-zx9'
            width={100}
            height={100}
            className="homepage-speaker-image-1"
          />


          <div className="d-flex homepage-speaker-detail-1-div ">

            <span className="title homepage-speaker-header-1">
              <h1>ZX9</h1>
              <h1>SPEAKER</h1>
            </span>

            <p className=" pgh homepage-speaker-pgh-1">
              Upgrade to premium
              speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>


            <Link href={`/products/${"zx9-speaker"}`}>
              <motion.button
                className="product-btn homepage-speaker-btn-1"
                initial={{
                  y: 0,
                }}
                animate={{
                  y: 7,
                }}

                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1,
                }}
              >
                SEE PRODUCT
              </motion.button>
            </Link>
          </div>

        </motion.div>


        <motion.div
          className="homepage-speaker-detail-2 d-flex"
          initial={{
            opacity: 0,
            x: 1 % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >
          <h1 className="homepage-speaker-header-2">
            ZX7 SPEAKER
          </h1>

          <Link href={`/products/${"zx7-speaker"}`}>
            <motion.button
              initial={{
                y: 0,
              }}
              animate={{
                y: 7,
              }}

              transition={{
                type: 'tween',
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1,
              }}
              className="product-btn homepage-speaker-btn-2">
              SEE PRODUCT
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="homepage-speaker-detail-3 d-flex"
          initial={{
            opacity: 0,
            x: 2 % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >

          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt='earphones-yx1'
            width={100}
            height={100}
            className="homepage-speaker-image-3"
          />

          <div className="homepage-speaker-div-3 d-flex">
            <h1 className="homepage-speaker-header-2">
              YX1 EARPHONES
            </h1>
            <Link href={`/products/${"yx1-earphones"}`}>
              <motion.button
                className="product-btn homepage-speaker-btn-2"
                initial={{
                  y: 0,
                }}
                animate={{
                  y: 7,
                }}

                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1,
                }}
              >

                SEE PRODUCT
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div >

      <motion.div
        initial={{
          opacity: 0,
          x: 1 % 2 === 0 ? 50 : -50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1
          }
        }}
        viewport={{ once: true }}
      >
        <LayoutAbout />
      </motion.div>
    </>
  )
}
