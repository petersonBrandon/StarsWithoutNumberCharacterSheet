import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BiHomeAlt, BiExit } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const navEndControlTop = useAnimation();
  const navEndControlBottom = useAnimation();
  const navItemContainerControlSide = useAnimation();
  const navItemSide = useAnimation();
  const router = useRouter();

  let scrollCount = 0;
  useEffect(() => {
    const onScroll = async () => {
      if (scrollCount == 0) {
        scrollCount++;
        await navAnimCloseFastSide();
        setOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.onkeydown = async (e) => {
      if (scrollCount == 0 && e.keyCode === 40) {
        scrollCount++;
        await navAnimCloseFastSide();
        setOpen(false);
      }
    };
  });

  const navAnimOpenSide = async () => {
    console.log("OPEN SIDE");
    scrollCount = 0;
    navItemContainerControlSide.start({ scaleX: 1, transition: { delay: 0.25 } });
    navEndControlBottom.start({ scaleX: 1, transition: { delay: 0.25 } });
    await navEndControlTop.start({ scaleX: 1, transition: { delay: 0.25 } });
    navEndControlBottom.start({ translateY: 0 });
    await navItemContainerControlSide.start({ scaleY: 1, translateY: 0 });
    await navItemSide.start({ opacity: 1 });
  };

  const navAnimCloseSide = async () => {
    console.log("CLOSE SIDE");
    await navItemSide.start({ opacity: 0 });
    navEndControlBottom.start({ translateY: -472 });
    await navItemContainerControlSide.start({ scaleY: 0, translateY: -236 });
    navItemContainerControlSide.start({ scaleX: 0 });
    navEndControlBottom.start({ scaleX: 0 });
    await navEndControlTop.start({ scaleX: 0 });
  };

  const navAnimCloseFastSide = async () => {
    console.log("CLOSE SIDE FAST");
    await navItemSide.start({
      opacity: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    navEndControlBottom.start({
      translateY: -472,
      transition: { default: { duration: DURATION_FAST } },
    });
    await navItemContainerControlSide.start({
      scaleY: 0,
      translateY: -236,
      transition: { default: { duration: DURATION_FAST } },
    });
    navItemContainerControlSide.start({
      scaleX: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    navEndControlBottom.start({
      scaleX: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    await navEndControlTop.start({
      scaleX: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
  };

  const logOut = () => {
    router.push("/auth/Login");
  };

  const navigateTo = (page) => {
    switch (page) {
      case "home":
        router.push("/CharacterSheet");
        break;
      case "party":
        router.push("/Party");
        break;
      case "settings":
        router.push("/Settings");
        break;
    }
  };

  const DURATION = 0.25;
  const DURATION_FAST = 0.1;

  return (
    <>
      <div id="nav_bar_side">
        {isInitial ? (
          <div
            onClick={() => {
              setOpen(true);
              setIsInitial(false);
              navAnimOpenSide();
            }}
            className="menu_icon"
          >
            <object
              type="image/svg+xml"
              data="/SWNLogoStaticAlt.svg"
              alt="open"
              width={150}
              height={150}
            />
          </div>
        ) : (
          <div
            onClick={async () => {
              let newOpen = !open;
              if (newOpen) setOpen(true);
              else setOpen(false);
              if (newOpen) await navAnimOpenSide();
              else await navAnimCloseSide();
            }}
            className="menu_icon"
          >
            <object
              type="image/svg+xml"
              data={
                open
                  ? "/SWNLogoAnimatedCSSOUT.svg"
                  : "/SWNLogoAnimatedCSSIN.svg"
              }
              alt="open"
              width={150}
              height={150}
            />
          </div>
        )}
        <div className="nav_bar_elements_side">
          <motion.div
            className="cut_corner_topLeft nav_bar_endcap_side"
            animate={navEndControlTop}
            initial={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ default: { duration: DURATION } }}
          >
            !
          </motion.div>
          <motion.div
            className="nav_item_container_side"
            animate={navItemContainerControlSide}
            transition={{ default: { duration: DURATION } }}
            initial={{ scaleY: 0, translateY: -236 }}
            exit={{ scaleY: 0, translateY: 0 }}
          >
            <motion.div
              className="nav_item_side"
              animate={navItemSide}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              <div
                className="nav_item_title pointer"
                onClick={async () => {
                  if (open) await navAnimOpenSide();
                  else await navAnimCloseSide();
                  setOpen(!open);
                  navigateTo("home");
                }}
              >
                <BiHomeAlt className="nav_icon" />
              </div>
            </motion.div>
            <motion.div
              className="nav_item_side"
              animate={navItemSide}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              <div
                className="nav_item_title pointer"
                onClick={async () => {
                  if (open) await navAnimOpenSide();
                  else await navAnimCloseSide();
                  setOpen(!open);
                  navigateTo("party");
                }}
              >
                <HiOutlineUserGroup className="nav_icon" />
              </div>
            </motion.div>
            <motion.div
              className="nav_item_side"
              animate={navItemSide}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              <div
                className="nav_item_title pointer"
                onClick={async () => {
                  if (open) await navAnimOpenSide();
                  else await navAnimCloseSide();
                  setOpen(!open);
                  navigateTo("settings");
                }}
              >
                <IoSettingsOutline className="nav_icon" />
              </div>
            </motion.div>
            <motion.div
              className="nav_item_side"
              animate={navItemSide}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              <div
                className="nav_item_title pointer"
                onClick={async () => {
                  if (open) await navAnimOpenSide();
                  else await navAnimCloseSide();
                  setOpen(!open);
                  logOut();
                }}
              >
                <BiExit className="nav_icon" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="cut_corner_bottomRight nav_bar_endcap_side"
            animate={navEndControlBottom}
            initial={{ scaleX: 0, translateY: -472 }}
            exit={{ scaleX: 0, translateY: 0 }}
            transition={{ default: { duration: DURATION } }}
          >
            !
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
