import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "instructor", "socio", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Instructores",
        href: "/list/instructores",
        visible: ["admin", "instructor"],
      },
      {
        icon: "/student.png",
        label: "Socios",
        href: "/list/socios",
        visible: ["admin", "instructor"],
      },
      {
        icon: "/subject.png",
        label: "Actividades",
        href: "/list/actividades",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Cursos",
        href: "/list/cursos",
        visible: ["admin", "instructor"],
      },
      {
        icon: "/attendance.png",
        label: "Asistencia",
        href: "/list/attendance",
        visible: ["admin", "instructor", "socio", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Eventos",
        href: "/list/eventos",
        visible: ["admin", "instructor", "socio", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Perfil",
        href: "/profile",
        visible: ["admin", "instructor", "socios", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Ajustes",
        href: "/settings",
        visible: ["admin", "instructor", "socios", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "instructor", "socios", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4" text-sm>
      {menuItems.map(i => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light m-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md_px-2 rounded-md hover:bg-fondoRojoLight">
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            }
          })}

        </div>
      ))}
      <Image src="/logo2.png" alt="" width={200} height={200} />
    </div>
  )
}


export default Menu