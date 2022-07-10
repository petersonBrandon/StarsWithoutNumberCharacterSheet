import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const navEndControlLeft = useAnimation();
  const navEndControlRight = useAnimation();
  const navItemContainerControl = useAnimation();
  const navItem = useAnimation();
  const router = useRouter();

  let scrollCount = 0;
  useEffect(() => {
    const onScroll = () => {
      if(scrollCount == 0) {
        navAnimCloseFast();
        setOpen(false);
        scrollCount++
      }
    };

    window.addEventListener("scroll", onScroll);
  });

  const navAnimOpen = async () => {
    scrollCount = 0;
    navItemContainerControl.start({ scaleY: 1 });
    navEndControlLeft.start({ scaleY: 1 });
    await navEndControlRight.start({ scaleY: 1 });
    navEndControlLeft.start({ translateX: 0 });
    await navItemContainerControl.start({ scaleX: 1, translateX: 0 });
    await navItem.start({ opacity: 1 });
  };

  const navAnimClose = async () => {
    await navItem.start({ opacity: 0 });
    navEndControlLeft.start({ translateX: 856 });
    await navItemContainerControl.start({ scaleX: 0, translateX: 428 });
    navItemContainerControl.start({ scaleY: 0 });
    navEndControlLeft.start({ scaleY: 0 });
    await navEndControlRight.start({ scaleY: 0 });
  };

  const navAnimCloseFast = async () => {
    await navItem.start({
      opacity: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    navEndControlLeft.start({
      translateX: 856,
      transition: { default: { duration: DURATION_FAST } },
    });
    await navItemContainerControl.start({
      scaleX: 0,
      translateX: 428,
      transition: { default: { duration: DURATION_FAST } },
    });
    navItemContainerControl.start({
      scaleY: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    navEndControlLeft.start({
      scaleY: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    await navEndControlRight.start({
      scaleY: 0,
      transition: { default: { duration: DURATION_FAST } },
    });
    scrollCount = 0;
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
    <div id="nav_bar">
      {open ? (
        <>
          <div className="nav_bar_elements">
            <motion.div
              className="cut_corner_topLeft nav_bar_endcap"
              animate={navEndControlLeft}
              transition={{ default: { duration: DURATION } }}
            >
              !
            </motion.div>
            <motion.div
              className="nav_item_container"
              animate={navItemContainerControl}
              transition={{ default: { duration: DURATION } }}
            >
              <motion.div
                className="nav_item"
                animate={navItem}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("home");
                  }}
                >
                  Home
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                animate={navItem}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("party");
                  }}
                >
                  Party
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                animate={navItem}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("settings");
                  }}
                >
                  Settings
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                animate={navItem}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    logOut();
                  }}
                >
                  Log out
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="cut_corner_bottomRight nav_bar_endcap"
              animate={navEndControlRight}
              transition={{ default: { duration: DURATION } }}
            >
              !
            </motion.div>
          </div>
          <div
            onClick={() => {
              setOpen(false);
              navAnimClose();
            }}
            className="menu_icon"
          >
            <object
              type="image/svg+xml"
              data="/SWNLogoAnimatedCSSOUT.svg"
              alt="open"
              width={150}
              height={150}
            />
          </div>
        </>
      ) : (
        <>
          <div className="nav_bar_elements">
            <motion.div
              className="cut_corner_topLeft nav_bar_endcap"
              initial={{ scaleY: 0, translateX: 856 }}
              animate={navEndControlLeft}
              exit={{ scaleY: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              !
            </motion.div>
            <motion.div
              className="nav_item_container"
              initial={{ scaleX: 0, scaleY: 0, translateX: 428 }}
              animate={navItemContainerControl}
              exit={{ scaleX: 0, scaleY: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              <motion.div
                className="nav_item"
                initial={{ opacity: 0 }}
                animate={navItem}
                exit={{ opacity: 0 }}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("home");
                  }}
                >
                  Home
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                initial={{ opacity: 0 }}
                animate={navItem}
                exit={{ opacity: 0 }}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("party");
                  }}
                >
                  Party
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                initial={{ opacity: 0 }}
                animate={navItem}
                exit={{ opacity: 0 }}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    navigateTo("settings");
                  }}
                >
                  Settings
                </div>
              </motion.div>
              <motion.div
                className="nav_item"
                initial={{ opacity: 0 }}
                animate={navItem}
                exit={{ opacity: 0 }}
                transition={{ default: { duration: DURATION } }}
              >
                <div
                  className="nav_item_title pointer"
                  onClick={async () => {
                    setOpen(false);
                    await navAnimClose();
                    logOut();
                  }}
                >
                  Log out
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="cut_corner_bottomRight nav_bar_endcap"
              initial={{ scaleY: 0 }}
              animate={navEndControlRight}
              exit={{ scaleY: 0 }}
              transition={{ default: { duration: DURATION } }}
            >
              !
            </motion.div>
          </div>
          {isInitial ? (
            <div
              onClick={() => {
                setOpen(true);
                setIsInitial(false);
                navAnimOpen();
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
              onClick={() => {
                setOpen(true);
                navAnimOpen();
              }}
              className="menu_icon"
            >
              <object
                type="image/svg+xml"
                data="/SWNLogoAnimatedCSSIN.svg"
                alt="open"
                width={150}
                height={150}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavMenu;
